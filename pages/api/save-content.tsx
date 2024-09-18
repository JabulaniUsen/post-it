import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/utils/db';
import { aiOutPut } from '@/utils/schema';
import moment from 'moment';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { formData, slug, aiResponse, createdBy } = req.body;

    try {
      const result = await db.insert(aiOutPut).values({
        formData: JSON.stringify(formData),
        templateSlug: slug,
        aiResponse: aiResponse || '',
        createdBy: createdBy || '',
        createdAt: moment().format('DD/MM/YYYY') || null
      });

      res.status(200).json({ success: true, data: result });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Error saving content to the database', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
