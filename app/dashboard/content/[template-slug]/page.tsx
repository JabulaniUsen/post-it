"use client"

import React, { useState } from 'react'
import FormSection from '../_component/FormSection'
import Output from '../_component/Output'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AIModal'

interface PROPS {
  params:{
    'template-slug': string
  }
}

function CreateNewContent(props:PROPS) {

  const selectedTemplate:TEMPLATE|undefined=Templates.find((item) => item.slug==props.params['template-slug'])
  const [loading, setLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string>("")

  const GenerateAIContent = async (formData:any) => {
    setLoading(true)
    const SelectedPromp = selectedTemplate?.aiPrompt
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPromp
    const result = await chatSession.sendMessage(FinalAIPrompt)
    // console.log(result.response.text());
    setAiOutput(result.response.text())
    setLoading(false)
  }

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button> <ArrowLeftCircle /> </Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection 
          selectedTemplate={selectedTemplate} 
          userFormInput={(v:any) => GenerateAIContent(v)}
          loading={loading}
        />

        <div className="col-span-2">
          <Output aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent