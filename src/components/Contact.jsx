import React from 'react'

function Contact() {
  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/56d599d6-d694-48ff-9aaf-ce1ed9cb6148" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p  className='text-4xl font-bold inline  border-b-4 border-pink-600 text-gray-300'>
                    Contact
                </p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email-ajvly22@gmail.com</p>
            </div>
            <input className='p-2 bg-[ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='p-2 my-4 bg-[ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='p-2 bg-[ccd6f6]' name="message" placeholder='Message' id="" cols="30" rows="10"></textarea>
            <button type='submit' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
        
    </div>
  )
}

export default Contact