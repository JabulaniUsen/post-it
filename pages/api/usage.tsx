import { db } from '@/utils/db';
import { aiOutPut } from '@/utils/schema';
import { eq } from 'drizzle-orm';

export default async function handler(req, res) {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    

    try {
        const result = await db.select().from(aiOutPut)
            .where(eq(aiOutPut.createdBy, email));

        let totalWordCount = 0;
        result.forEach(element => {
            const responseText = element.aiResponse || '';
            totalWordCount += responseText.split(/\s+/).filter(Boolean).length;
        });

        res.status(200).json({ totalUsage: totalWordCount });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
}
