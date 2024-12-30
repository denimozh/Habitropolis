import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex flex-row justify-between items-center lg:px-60 px-5 py-5'>
        <h1 className='text-lg lg:text-3xl font-medium'>Habitropolis</h1>
        <div className='hidden lg:flex flex-row gap-8'>
            <p className='cursor-pointer'>Pricing</p>
            <p className='cursor-pointer'>FAQ</p>
            <p className='cursor-pointer'>Reviews</p>
        </div>
        <div className='bg-primary p-3 rounded-lg text-white cursor-pointer hover:bg-blue-700'>
            Unlock my Potential
        </div>
    </div>
  )
}

export default Navbar