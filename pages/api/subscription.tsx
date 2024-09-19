import { NextApiRequest, NextApiResponse } from 'next';
// import { supabase } from '@/lib/supabaseClient'; 
import { supabase } from '@/utils/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, plan, reference, status } = req.body;

    try {
      // Insert or update subscription info
      const { data, error } = await supabase
        .from('subscriptions')
        .insert([
          { email, plan, reference, status, created_at: new Date() }
        ]);

      if (error) throw error;

      res.status(200).json({ message: 'Subscription recorded', data });
    } catch (error) {
      res.status(500).json({ message: 'Error recording subscription', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
