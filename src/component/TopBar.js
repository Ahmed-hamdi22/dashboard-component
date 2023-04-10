import React from 'react'
import { Link } from 'react-router-dom'
const TopBar = () => {
  return (
    <div className='topbar container ' >
        <h1>store</h1>
        <Link to="/" className=' btn-bar'>go to web site</Link>
      
    </div>
  )
}

export default TopBar
