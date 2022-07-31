import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full p-4'>
            <div className='pb-8'>
                <p className='text-4xl font-bold underline text-center p-2 decoration-orange-500'>Contact</p>
                <p className='text-center pt-2' >Let's have a talk.</p>
            </div>
            <div className='flex items-center justify-center'>
                <form action="https://getform.io/f/4a42110e-8e98-41d6-ba43-b807be06f0a0" 
                method="POST" 
                className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder='Enter your name'
                    className='p-2 bg-transparent border rounded-md text-white focus:outline-none'
                    />
                    <input 
                    type="email" 
                    name="email" 
                    placeholder='Enter your email'
                    className='p-2 bg-transparent border rounded-md text-white focus:outline-none my-4'
                    />
                    <textarea 
                    name="message" 
                    rows="10" 
                    className='p-2 bg-transparent border rounded-md text-white focus:outline-none'
                    placeholder='Enter your message'
                    ></textarea>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-amber-700 to-amber-600 cursor-white'>Let's Connect </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact