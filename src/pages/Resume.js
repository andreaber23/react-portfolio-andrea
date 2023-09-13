import React from 'react'

function Resume() {
  return (
    <div>
      <div>
        <h1> Resume </h1>
      </div>
      <div className='skills'>
        <h1> Skills </h1>
         <ul className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, NPM,BootStrap, MaterialUI,StyledComponents, AJAX/Fetch, Front-End build tools, React, JavaScript</span>
            </li>
            <li className='item'>
            <h2> Back-End</h2>
            <span>NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB, AWS S3, </span>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Resume
