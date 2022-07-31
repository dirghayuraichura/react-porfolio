import React, {useState} from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from 'react-scroll'
const Navbar = () => {
    const [nav, setNav] =useState(false);
    
    const links = [
        {
            id:1,
            link:'home'
        },
        
        {
            id:2,
            link:'about'
        },
        
        {
            id:3,
            link:'experience'
        },
        {
            id:4,
            link:'techstacks'
        },
        
        {
            id:5,
            link:'contact'
        }
    ]


  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
        <div className='font-logo text-5xl ml-2'>Dirghayu</div>

        <ul className='hidden md:flex'>
            {links.map(({id,link})=>(
                <li key={id}
                className='px-4 hover:text-orange-500 capitalize cursor-pointer font-medium text-gray-500 hover:scale-110 duration-200 border-r border-orange-500'>
                <Link to={link} smooth duration={700}>
                    {link}
                </Link>
                    
                </li>
                
            ))
            }
        </ul>

        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}

        </div>

        {nav && (
             <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-600 '>
             {links.map(({id,link})=>(
                     <li key={id}
                    
                     className='px-4 cursor-pointer capitalize py-6 text-4xl hover:underline'>
                    <Link 
                     onClick={()=>setNav(!nav)}
                    to={link} smooth duration={500}>
                    {link}
                    </Link>
                </li>
                     
                 ))
                 }           
     
             </ul>
        )}
       
    </div>
  )
}

export default Navbar