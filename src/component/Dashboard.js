import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import TopBar from './TopBar'
const Dashboard = () => {
  return (
   
      <div>
        <TopBar/>
       
      <div className=' contant'>

<Sidebar className=" col-2"/>
     
<div style={{width:"80%"}}className=' col-10'>
 <Outlet />
</div>
      </div>
      </div>
    
  )
}

export default Dashboard
