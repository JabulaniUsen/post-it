"use client"; // Mark this as a Client Component

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
        <button
            className="ml-5 p-2 text-blue-500 text-sm bg-blue-50 rounded hover:text-blue-600 hover:font-medium transition-all"
            onClick={copyToClipboard}
        >
            Copy
        </button>
    );
};

export default CopyButton;
