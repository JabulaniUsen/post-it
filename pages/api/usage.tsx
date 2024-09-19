import { db } from '@/utils/db';
import { users, aiOutPut } from '@/utils/schema';
import { eq } from 'drizzle-orm';

export default async function handler(req, res) {
    const { email, updateCredits } = req.query;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        // Step 1: Calculate the total word count based on AI outputs
        const result = await db.select().from(aiOutPut)
            .where(eq(aiOutPut.createdBy, email));

        let totalWordCount = 0;
        result.forEach(element => {
            const responseText = element.aiResponse || '';
            totalWordCount += responseText.split(/\s+/).filter(Boolean).length;
        });

        // Step 2: If 'updateCredits' flag is present, update user's total credits to 100,000
        if (updateCredits) {
            // Assuming you now have a users table
            await db.update(users)
            .set({
            totalUsage: 100000, // Update credits to 100,000
            subscriptionStatus: true, // Activate the subscription
            })
            .where(eq(users.email, email));

            
            res.status(200).json({ message: 'Credits successfully updated', totalUsage: totalWordCount });
        } else {
            res.status(200).json({ totalUsage: totalWordCount });
        }
    } catch (error) {
        console.error('Error fetching or updating data:', error);
        res.status(500).json({ error: 'Error fetching or updating data' });
    }
}
