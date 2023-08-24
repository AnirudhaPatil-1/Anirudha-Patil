import React from 'react'
import videoCamera from '../assets/video-camera.png'

const Navbar = () => {
  return (
    <div>
        <div className="banner">LeanPrep</div>
        <div className="NavLinks">
            <p className='navlink'>About Us</p>
            <p className='navlink'>Pricing</p>
            <div className='navlink'>
                <p>Demo</p>
                <img src={videoCamera}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar