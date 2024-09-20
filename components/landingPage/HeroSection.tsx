"use client"

import { ArrowBigRight, ArrowRight, ArrowRightCircle, MoveRight, PlayCircleIcon, PlayIcon } from 'lucide-react'
import React from 'react'
import heroImg from '../../public/heroImg.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function HeroSection() {
  const router = useRouter(); 

  const handleNavigate = () => {
    router.push('/dashboard');
  };

 
  return (
    <div>
      <div className="lg:px-[50px] px-5 lg:mt-0 mt-20 grid grid-cols-1 place-items-center lg:grid-cols-2">
        <div className="text flex flex-col justify-start items-start">
            <p className='bg-[#e5e1f9] px-4 text-sm py-1 rounded-xl mb-3 text-[#6941C6]'>
                Welcome to <span className='font-semibold'>PostIt</span>
            </p>
            <h1 className='text-gray-900 lg:text-[56px] text-[37px] font-bold'>
                Improve Your Social 
                Media With PostIt AI
            </h1>
            <p className='my-3'>
                Whether it's YouTube, Facebook, X, TikTok, Instagram, 
                LinkedIn, blogs, or more, we’ve got you covered. Explore 
                our extensive collection of templates and effortlessly 
                create standout content that captures attention.

            </p>
            <div className="buttons flex items-center gap-8 mt-3 mb-6">
                <button onClick={handleNavigate} className='bg-[#1d2939] text-sm transition-all hover:scale-105 text-white px-6 py-3 rounded-3xl flex items-center gap-5'>
                    Get Started
                    <ArrowRightCircle className='text-sm lg:block hidden' />
                </button>
                {/* <button className='px-6 py-3 text-sm hover:scale-105 border transition-all rounded-3xl flex items-center gap-5'>
                    <PlayCircleIcon className='text-sm text-[#6941C6] lg:block hidden ' />
                    Watch Intro
                </button> */}
            </div>
        </div>

        <div className="img hover:scale-105 hover:rotate-3 transition-all">
            <Image src={heroImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
