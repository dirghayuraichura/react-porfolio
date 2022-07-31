import React from 'react'
import { techStacks } from '../content/Techstacks'  

const Techstacks = () => {
  return (
    <div name="techstacks" className='h-screen w-full bg-gradient-to-b from-gray-800 to-black via-black text-white'>
     <div className="max-w-screen-lg mx-auto md:px-4 px-4 flex flex-col justify-center w-full h-full text-white">
        <div>
                <p className='text-4xl font-bold underline text-center p-2 decoration-orange-500'>
                    Techstacks
                </p>
                <p className='text-center'>Technologies I am working on....</p>
        </div>
        <div className='w-full h-full grid grid-cols-2 md:grid-cols-4 py-8 text-center px-12 sm:px-0'>
            {techStacks.map(({src,title,id})=>(
                  <div className='shadow-md hover:scale-105 duration-500 rounded-lg' key={id}>
                  <img src={src} className='w-28 mx-auto' alt="img_tech"/>
                  <p className='mt-4'>{title}</p>
              </div>
  
            ))}
          
        </div>
    </div>
    </div>
)}

export default Techstacks