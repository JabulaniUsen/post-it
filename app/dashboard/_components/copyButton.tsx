"use client"; // Mark this as a Client Component

import { Button } from '@/components/ui/button';
import React from 'react';

interface CopyButtonProps {
    textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            alert('AI Response copied to clipboard!');
        } catch (err) {
            alert('Failed to copy text: ' + err);
        }
    };

    return (
        <Button
            className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={copyToClipboard}
        >
            Copy
        </Button>
    );
};

export default CopyButton;
