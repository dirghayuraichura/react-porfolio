import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center h-full w-full'>  
            <div className='pb-8'>
                <p className='text-4xl font-bold underline text-center decoration-orange-500 underline-offset-8'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
            Experienced in Web/App/Api Development with more than 5 Years. Habitual in writing
            well-defined, designed and documented code. Adept in all stages of advanced web
            development. Knowing User Interface, database design, database management, and
            core development. Bringing forth expertise in web app development including all stages.
            Equipped with a diverse and promising skill-set. Able to self-manage during
            individual/independent projects and collaborate in a team setting for best and
            productive development.
            </p>
        </div>
    </div>
  )
}

export default About