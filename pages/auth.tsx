import React from 'react'
import Image from 'next/image'
import Input from '@/components/Input'

const auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className='px-12 py-5'>
            <Image src='/images/logo.png' alt='logo_image' width={100} height={100}/>
        </nav>
        <div className='flex justify-center'>
            <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                <h2 className='text-white text-4xl mb-8 font-semibold'>
                    Sign in
                </h2>
                <div className='flex flex-col gap-4'>
                    <Input/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default auth
