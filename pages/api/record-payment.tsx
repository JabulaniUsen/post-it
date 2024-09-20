import { NextApiRequest, NextApiResponse } from 'next';
import { payments } from '@/utils/schema';
import { drizzle } from 'drizzle-orm/node-postgres';
// import { supabase } from '@/lib/supabaseClient';
import { supabase } from '@/utils/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, amount, reference, status } = req.body;

    try {
      // Record payment in Supabase
      const { error } = await supabase
        .from('payments')
        .insert([
          {
            email,
            amount,
            status,
            reference,
          },
        ]);

      if (error) {
        throw new Error(error.message);
      }

      res.status(200).json({ message: 'Payment recorded successfully' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
