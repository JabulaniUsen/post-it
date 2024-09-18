"use client"

import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import type { Editor as EditorType } from '@toast-ui/react-editor';

interface Props {
  aiOutput: string;
}

function Output({ aiOutput }: Props) {
  const editorRef = useRef<EditorType>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  const handleCopy = async () => {
    if (editorRef.current) {
      const markdown = editorRef.current.getInstance().getMarkdown();
      try {
        await navigator.clipboard.writeText(markdown);
        console.log("Copied to clipboard!");
      } catch (error) {
        console.error("Failed to copy: ", error);
      }
    }
  };

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className="flex justify-between items-center p-5">
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2' onClick={handleCopy} aria-label="Copy Markdown">
          <Copy className='h-4 w-4' /> Copy 
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height='600px'
        useCommandShortcut={true}
        onChange={() => {
          if (editorRef.current) {
            console.log(editorRef.current.getInstance().getMarkdown());
          }
        }}
      />
    </div>
  );
}

export default Output;
