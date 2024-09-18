import { db } from '@/utils/db';
import { aiOutPut } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import React from 'react';
import Templates from '@/app/(data)/Templates';
import CopyButton from '../_components/copyButton';

export interface HISTORY {
    id: Number;
    formData: string;
    aiResponse: string;
    templateSlug: string;
    createdBy: string;
    createdAt: string;
}

const GetTemplateName = (slug: string) => {
    const template = Templates?.find((item) => item.slug === slug);
    return template ? template.name : 'Unknown Template';
};

const GetTemplateImage = (slug: string) => {
  const template = Templates?.find((item) => item.slug === slug);
  return template ? template.icon : ''; // Return the icon URL for the matched template slug
};


const History = async () => {
    const user = await currentUser();

    if (!user) {
        return <div>Please log in to view your history.</div>;
    }

    const historyList: HISTORY[] = await db
        .select()
        .from(aiOutPut)
        .where(eq(aiOutPut?.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(aiOutPut.id));

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">History</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-3">Template</th>
                            {/* <th className="p-3">Form Data</th> */}
                            <th className="p-3">Result</th>
                            <th className="p-3">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyList.map((history) => (
                            <tr key={history.id.toString()} className="border-b">
                                <td className="p-3 flex items-center space-x-3">
                                    <img
                                        src={GetTemplateImage(history.templateSlug)}
                                        alt="Template"
                                        className="w-10 h-10 object-cover rounded-full"
                                    />
                                    <span>{GetTemplateName(history.templateSlug)}</span>
                                </td>
                                {/* <td className="p-3">{history.formData}</td> */}
                                <td className="p-3">
                                    <div className="flex items-center">
                                        <p className="truncate max-w-xs">{history.aiResponse}</p>
                                        {/* Use the Client Component for interactivity */}
                                        <CopyButton textToCopy={history.aiResponse} />
                                    </div>
                                </td>
                                <td className="p-3">
                                    {/* {new Date(history.createdAt).toLocaleString()} */}
                                    {history.createdAt}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
