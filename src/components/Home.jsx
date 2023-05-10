import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen   bg-[#0a192f]'>
    {/* // ----container--- */}

        <div className='max-w-[1000px] mx-auto px-8 flex  flex-col justify-center h-full'>
            <p className='text-pink-600'> Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]' >Anwar junaid</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]' >I'm a React js Developer </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Enthusiastic person eager to contribute to team success
through hard work and leadership skills iam interested in
challenging projects specifically in the domain of Web
Development using React js
</p>
        <div>
        <Link to="work" smooth={true}  duration={500}>  <button className='text-white px-6 py-3 border-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' > View Work <HiArrowNarrowRight className='ml-3' /></button></Link>
        </div>
        </div>
    </div>
  )
}

export default Home