import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
            <p className='uppercase text-sm tracking-widest text-gray-600'>ayo what am i doing here?</p>
            <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651ef]'>Rafael</span></h1>
            <h1 className='py-4 text-gray-700'>
                <TypeAnimation 
                    sequence={[
                        'A Software Engineer',
                        1500,
                        'A UI/UX Designer',
                        1500,
                        'A Tech Enthusiast',
                        1500,
                        'A Student Athlete',
                        1000,
                    ]}
                    cursor={true}
                    repeat={Infinity}
                />
            </h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>awdabdw d ahwo ad adwhoawhd hadwo adohsadoihoh awh aodh</p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

            <a
            href='https://www.linkedin.com/in/gian-rafael/'
            target='_blank'
            rel='noreferrer'
            >
                <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#5651ef] group'>
                    <FaLinkedinIn className='group-hover:fill-white' />
                </div>
            </a>
            
            <a
            href='https://github.com/ExoticTrunks'
            target='_blank'
            rel='noreferrer'
            >
                <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#5651ef] group'>
                    <FaGithub className='group-hover:fill-white'/>
                </div>
            </a>

            <a
            href='mailto:ralipalermo@hotmail.com'
            >
                <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#5651ef] group'>
                    <AiOutlineMail className='group-hover:fill-white'/>
                </div>
            </a >
            
            <a href='https://docs.google.com/document/d/1rwhOnyzhiQLBoeooO_DmwUfrQ_WiHa3fadtyq_tBwSg/export?format=pdf'
            target='_blank'
            rel='noreferrer' >
                <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#5651ef] group'>
                    <BsFillPersonLinesFill className='group-hover:fill-white'/>
                </div>
            </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main