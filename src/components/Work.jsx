import React from 'react'
import workImg from '../assets/workImg.jpeg'
import realestate from '../assets/realestate.jpg'


function Work() {
  return (
    <div name='work' className=' md:h-screen w-full bg-[#0a192f]  text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pt-8'>
                <p className='text-4xl font-bold inline  border-b-4 border-pink-600'>Work</p>
                <p className='py-6'>check out some of my recent work</p>
            </div>
            {/* single card container */}

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {/* //spacefic */}
                <div  style={{backgroundImage:`url(${workImg}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effect */}

                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application

                        </span>
                        <div className='pt-8 text-center '>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div  style={{backgroundImage:`url(${realestate}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effect */}

                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application

                        </span>
                        <div className='pt-8 text-center '>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>
                <div  style={{backgroundImage:`url(${realestate}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effect */}

                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application

                        </span>
                        <div className='pt-8 text-center '>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>
                <div  style={{backgroundImage:`url(${workImg}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effect */}

                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application

                        </span>
                        <div className='pt-8 text-center '>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div  style={{backgroundImage:`url(${realestate}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effect */}

                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application

                        </span>
                        <div className='pt-8 text-center '>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>
                <div  style={{backgroundImage:`url(${realestate}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effect */}

                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application

                        </span>
                        <div className='pt-8 text-center '>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Work