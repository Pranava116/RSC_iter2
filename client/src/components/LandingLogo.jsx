import React from 'react'

function LandingLogo() {
  return (
    <div>
      <div className='relative w-[500px] max-w-lg mr-[100px] '>
        <div className='mix-blend-multiply absolute opacity-85 filter blur-xl animate-blob_up  top-10 -left-4 rounded-full  w-72 h-72 bg-purple-300 overflow-hidden'></div>
        <div className='mix-blend-multiply  absolute opacity-85  filter blur-xl animate-blob_up  top-10 -right-4 rounded-full w-72 h-72 bg-blue-400 overflow-hidden'></div>
        <div className='mix-blend-multiply  absolute opacity-85 animate-blob_down filter blur-xl top-28 left-4 rounded-full w-72 h-72 bg-pink-300 overflow-hidden'></div>
        <div className='mix-blend-multiply  absolute opacity-85  animate-blob_down filter blur-xl top-28 right-4 rounded-full w-72 h-72 bg-yellow-300 overflow-hidden'></div>
        <div className='opacity-100 z-10'>
        <img src='/RSC_Logo.png' className='relative object-contain  w-[900px]'/>
        </div>
      </div>
    </div>
  )
}

export default LandingLogo
