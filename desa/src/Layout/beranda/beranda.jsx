import React from 'react'
import Hero from '../../components/main/hero'
import Profile from '../../components/main/content/Profile'

function Beranda() {
  return (
    <div className='pt-16'>
        <Hero/>
        <div className="max-w-screen-xl mx-auto p-4 pt-8">
          <Profile/>
        </div>
    </div>
  )
}

export default Beranda