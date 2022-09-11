import React from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen' >
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]' >Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>

{/* left */}
<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
    <div className='lg:p-4 h-full'>
        <div>
            <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'></img>
        </div>
        <div>
            <h2 className='py-2'>Rafael Palermo</h2>
            <p className='py-4'>Drop me a message!</p>
        </div>
        <div>
        <p className='uppercase pt-8' >Connect With Me</p>
        <div className='flex items-center justify-between py-4'>
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

{/* right */}

<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
    <div className='p-4'>
    <form action='https://getform.io/f/aa5af930-2ea4-4e6e-beb4-7348f1e58668' method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        <div className='flex flex-col'>
        <label className='uppercase text-sm py-2'>Name</label>
        <input  name='name' type="text" className='border-2 rounded-lg pg-3 flex border-gray-300'/>
        </div>

        <div className='flex flex-col'>
        <label className='uppercase text-sm py-2'>Phone Number</label>
        <input  name='number' type="text" className='border-2 rounded-lg pg-3 flex border-gray-300'/>
        </div>
        </div>

        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input  name='email' type="email" className='border-2 rounded-lg pg-3 flex border-gray-300'/>
        </div>

        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Subject</label>
            <input name='subject'  type="text" className='border-2 rounded-lg pg-3 flex border-gray-300'/>
        </div>

        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea  name='message' className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
        </div>

        <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
    </form>
    </div>
</div>

        </div>
        <div className='flex justify-center py-12'>
        <Link href='/'>
        <div className='rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]'/>
            </div>
        </Link>
</div>
        </div>
    </div>
  )
}

export default Contact