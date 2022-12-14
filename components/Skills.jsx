import React from 'react'
import Image from 'next/image'
import PythonImg from '../public/assets/skills/python.png'
import JSImg from '../public/assets/skills/js.png'
import ReactImg from '../public/assets/skills/react.png'
import FireBaseImg from '../public/assets/skills/firebase.png'
import FigmaImg from '../public/assets/skills/figma.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={PythonImg} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
            </div>
            </div>
            </div>  

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={JSImg} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
            </div>
            </div>
            </div>  

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
            </div>
            </div>
            </div>  

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={FigmaImg} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Figma</h3>
            </div>
            </div>
            </div>  

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={FireBaseImg} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
            </div>
            </div>
            </div>  

        </div>
        </div>
    </div>
  )
}

export default Skills