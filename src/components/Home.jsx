import React from 'react';
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black text-white '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white pt-36'>
                    I'm a Full Stack Developer
                </h2>
                <p className='py-4 max-w-md'>
                    I have a 5+ years of experience building and designing web applications. 
                    Currently I'm working as Senior Software Engineer at OTT platform organization. 
                    I have experience with various technologies like React, PHP, Tailwind, Node.JS, MongoDB, MySql etc. 
                </p>
                <div>
                    <Link to="experience" smooth duration={700} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-amber-700 to-amber-600 cursor-white cursor-pointer'>
                        My Experience
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25}/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my_profile" className='rounded-2xl mx-auto w-80 md:w-full'/>
            </div>
        </div>
       
       
    </div>
  )
}

export default Home