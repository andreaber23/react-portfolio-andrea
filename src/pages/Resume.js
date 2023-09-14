import React from 'react'


function Resume() {
  return (
    <div className='resumeMain'>
        <h1> Resume </h1>
        <p> resume goes here</p>
      <div className='skills'>
        <h1> Skills </h1>
         <ul className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <ul>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>NPM</li>
                <li>Bootstrap</li>
                <li>MaterialUI</li>
                <li>Styled Components</li>
                <li>AJAX Fetch</li>
                <li>Front-End build tools</li>
                <li>JavaScript</li>
            </ul>         
          </li>
            <li className='item'>
            <h2> Back-End</h2>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>GraphQL</li>
                <li>Apollo Server</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
            </ul>     
            </li>  
         </ul>
      </div>
    </div>
  )
}

export default Resume
