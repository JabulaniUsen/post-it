import { db } from '@/utils/db';
import { aiOutPut } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import React from 'react';
import Templates from '@/app/(data)/Templates';
import CopyButton from '../_components/copyButton';

export interface HISTORY {
    id: number;
    formData: string;
    aiResponse: string | null;  // Allow null values
    templateSlug: string;
    createdBy: string;
    createdAt: string | null;  // Allow null values
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

    if (!user || !user.primaryEmailAddress?.emailAddress) {
        return <div>Please log in to view your history.</div>;
    }

    const historyList: HISTORY[] = await db
        .select()
        .from(aiOutPut)
        .where(eq(aiOutPut?.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(aiOutPut.id));

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">History</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Template
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Result
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Date
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                               
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {historyList.map((history) => (
                            <tr key={history.id.toString()} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-3">
                                    <img
                                        src={GetTemplateImage(history.templateSlug)}
                                        alt="Template"
                                        className="w-8 h-8 object-cover "
                                    />
                                    <span className="font-bold ml-5 text-gray-900">
                                        {GetTemplateName(history.templateSlug)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-wrap">
                                    <div className="flex items-center space-x-2">
                                        <p className="text-sm text-gray-700 text-justify line-clamp-4 max-w-sm">
                                            {history.aiResponse}
                                        </p>
                                        
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {/* {new Date(history.createdAt).toLocaleString()} */}
                                    {history.createdAt}
                                </td>

                                <td>
                                    <CopyButton textToCopy={history.aiResponse || ''} />
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
