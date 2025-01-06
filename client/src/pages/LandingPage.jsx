import React from 'react'
import Navbar from '../components/Navbar'
import LandingText from '../components/LandingText'
import LandingLogo from '../components/LandingLogo'

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-between h-[500px] w-full mt-[100px]'>
        <div >
        <LandingText/>
        </div>
       <div>
       <LandingLogo/>
       </div>
      </div>
    </div>
  )
}

export default LandingPage
