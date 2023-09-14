import React from 'react';
import homeProfile from '../images/homeProfile.png'

function Home() {
  return (
    <div className='home'>
      <div className='introduction'> 
        <h2>I am Andrea</h2>
        <img src={homeProfile} alt="My Portfolio" className='homeProfile' />
        <div className='prompt'>
          <p>Innovate, Develop, Inspire: The Full Stack Way!</p>
          </div>
      </div>

    </div>
  )
}

export default Home
