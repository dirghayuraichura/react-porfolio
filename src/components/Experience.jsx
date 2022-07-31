import React, {useState} from 'react'
import {expData} from "../content/Experience"

const Experience = ({title,content}) => {
const [clicked, setClicked] = useState(false);
const toggle = index =>{
    if(clicked===index){
        return setClicked(null)
    }
    setClicked(index);
}
  return (
    <div name="experience" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black text-white'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>        
    <div className='pb-8'>
                <p className='text-4xl font-bold underline text-center decoration-orange-500'>
                    Experience
                </p>
            </div>
        {expData.map((item,index)=>(  
            <div key={item.id}>
        
        <h2 className='border-b px-4 font-bold text-xl cursor-pointer py-4' key={item.id}  onClick={()=>toggle(index)}>{item.title}
        </h2>
        {clicked ===index &&(
            <p key={item.id} className='px-4 py-2' dangerouslySetInnerHTML={{__html:item.content}}></p>
        )}
        </div>
        ))}
        </div>
    </div>
  )
}

export default Experience