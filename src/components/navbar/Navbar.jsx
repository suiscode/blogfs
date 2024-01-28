import React from 'react'
import Link from './links/Link'

function Navbar() {
  return (
    <div className='h-[100px]  flex items-center justify-between'>
        <div className='font-bold text-3xl'>
            Logo
        </div>
        <Link/>
    </div>
  )
}

export default Navbar