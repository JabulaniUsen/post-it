import { Blocks, DatabaseBackup, HandCoins, UserRoundCheck } from 'lucide-react'
import React from 'react'

function Why() {

    const whyData = [
        {
            name: 'Why Choose Us', 
            icon: UserRoundCheck,
            desc: 'Create high-quality, engaging content with PostIt, built for speed and accuracy.' 
        },
        {
            name: 'Save Your Time', 
            icon: DatabaseBackup,
            desc: 'Generate content in minutes, allowing you to focus on growth while we handle the rest.' 
        },        {
            name: 'Good Pricing', 
            icon: HandCoins,
            desc: 'Choose between our Basic and Premium plans for cost-effective content creation.' 
        },        {
            name: 'Best Strategy', 
            icon: Blocks,
            desc: 'Use AI insights to optimize your content strategy and reach your target audience efficiently.' 
        },
    ]

  return (
    <div id='about' className='lg:px-[50px] px-5 my-20'>
        <div className="bg-[#53389e] p-10 rounded-3xl grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-10">
            {whyData.map((item, index) => (
                <div className="text-[#e9d7fe] flex flex-col justify-start items-start" key={index}>
                    <div className="p-3 ml-5 border border-spacing-5 bg-[#7f56d9] rounded-full">
                        <item.icon  className='text-white ' />
                    </div>
                    <h3 className='text-2xl font-semibold mt-3 mb-2 px-5'>{item.name}</h3>
                    <p className='lg:border-r border-r-slate-100 lg:border-b-0 border-b lg:py-0 px-5 pb-5'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Why