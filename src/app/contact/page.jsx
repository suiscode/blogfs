import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <div className='flex items-center gap-[100px] max-[768px]:flex-col'>
      <div className='min-[768px]:flex-[1] relative h-[500px] w-[500px]'>
        <Image src='/contact.png' alt='contact' fill className='object-contain'/>
      </div>
      <div className='min-[768px]:flex-[1] max-[768px]:w-full'>
        <form className='flex flex-col gap-5'>
          <input type='text' className='p-5 rounded border-none outline-none bg-[#2d2b42] color-white' placeholder='Name and Surname'/>
          <input type='text' className='p-5 rounded border-none outline-none bg-[#2d2b42] color-white' placeholder='Email address'/>
          <input type='text' className='p-5 rounded border-none outline-none bg-[#2d2b42] color-white' placeholder='Phone number (Optional)'/>
          <textarea className='p-5 rounded border-none outline-none bg-[#2d2b42] color-white'rows="10" placeholder='Mesage'></textarea>
          <button className='p-5 bg-[#3673fd] font-bold border-none rounded cursor-pointer text-white'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage