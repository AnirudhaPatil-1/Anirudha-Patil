import React from 'react'

import BlobLeft from '../assets/blobLeft.png';
import BlobRight from '../assets/blobRight.png';

const Content = () => {
  return (
    <div>
        <img src={BlobLeft}/>
        <div className="heroText">
            <div className="label">
                <p>Don't let nerves get the best of you - </p>
                <p>practice makes perfect!</p>
            </div>
            <div className="description">
                <span>Welcome to</span>
                <span>LeanPrep</span>
                <span>! The ultimate destination for honing your interview skills. Whether you&#39;re a fresh graduate, career
                    changer, or seasoned professional, we&#39;ve got you covered. Our
                </span>
                <span>comprehensive library</span>
                <span>of mock interview questions and</span>
                <span>expert tips</span>
                <span>will help you </span>
                <span>ace any job interview</span>
            </div>
            <div className='joinProgram'>
                <button className='join'>Join our Program</button>
                <p>
                    <span>Already a member?</span>
                    <span>Login</span>
                </p>
        </div>
        <img src={BlobRight }/>
    </div>



    

    </div>
  )
}

export default Content