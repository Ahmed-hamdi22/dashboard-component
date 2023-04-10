import React from 'react'
import Form from './Form'


const Createuser = () => {
  return (
    <div>
   <Form
   endpoint ="user/create"
   navigate ="dashboard/user"
   button="create"/>
    </div>
  )
}

export default Createuser
