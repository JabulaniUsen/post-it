"use client"

import React from 'react'
import FormSection from '../_component/FormSection'
import Output from '../_component/Output'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'

interface PROPS {
  params:{
    'template-slug': string
  }
}

function CreateNewContent(props:PROPS) {

  const selectedTemplate:TEMPLATE|undefined=Templates.find((item) => item.slug==props.params['template-slug'])
  
  const GenerateAIContent = (formData:any) => {

  }

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button> <ArrowLeftCircle /> </Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection 
          selectedTemplate={selectedTemplate} 
          userFormInput={(v:any) => console.log(v)}
        />

        <div className="col-span-2">
          <Output />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent