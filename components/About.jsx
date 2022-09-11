import React from 'react'
import Image from 'next/image'
import AboutImg from '../public/assets/profile.jpeg'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-12'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>//I create stuff with my hands and keyboard</p>
                <p className='py-2 text-gray-600'>I am a final year student pursuing a diploma in <a href='https://www.tp.edu.sg/schools/eng/computer-engineering' rel="noreferrer" target='_blank' className='underline decoration-[#5651e5]' >Computer Engineering</a> at Temasek Polytechnic and am currently doing a 1 year internship at the Government Technology Agency of Singapore (GovTech). 
                3 Fields I'm interested in are Programming, Artificial Intelligence and Cyber Security.
                </p>
                <p className='py-2 text-gray-600'>When I'm not coding, I spend my free time travelling, hunting for good food and playing basketball with my friends.</p>
                <Link href='/#projects'>
                <a className='py-2 text-gray-600 underline cursor-pointer decoration-[#5651e5]'>Check out some of my projects!</a>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 easi-in duration-300'>
            <Image className='rounded-xl' src={AboutImg} alt='/' width='500' height='500' />
            </div>
        </div>
    </div>
  )
}

export default About