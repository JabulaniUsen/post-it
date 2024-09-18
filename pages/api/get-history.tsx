import { HISTORY } from "@/app/dashboard/history/page";
import { db } from "@/utils/db";
import { aiOutPut } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res:NextApiResponse)  {
    const user = await currentUser()
    if(req.method === 'GET') {
        const {formData, slug, aiResponse, createdBy} = req.body;

        try {
            {/* @ts-ignore */}
            const result:HISTORY[] = await db.select().from(aiOutPut)
             .where(eq(aiOutPut.createdBy, user?.primaryEmailAddress?.emailAddress));
             res.status(200).json({ success: true, data: result });
        } catch (error) {
            console.log('database error', error);
            res.status(500).json({ error:'Error getting content fron database' })
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' })
    }
}