import "./index.css"
import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard'
// import Header from './component/Header'
import Home from './component/Home'
// import Updateuser from './component/Updateuser'
import User from './component/User'
import Login from './component/Login'
import Signup from './component/Signup'
import UpdateUser from './component/UpdateUser'
import Createuser from "./component/Createuser"
import RequireAuth from "./Auth/RequireAuth"
import PersistLogin from "./Auth/PersistLogin"
import Products from "./Products/Products"
import NewProduct from "./Products/NewProduct"
import UpDateProduct from "./Context/UpDateProduct"

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/'element={ <Home/>}/>
        <Route path='/register'element={ <Signup/>}/>
        <Route path='/login'element={ <Login/>}/>
        {/* protected Route */}
        <Route element={<PersistLogin/>}>
        <Route element={<RequireAuth/>}>
        <Route path='/dashboard'element={ <Dashboard/>}>
        <Route  path='products'element={ <Products/>}/>
        <Route  path='products/create'element={ <NewProduct/>}/>
        <Route  path='products/:id'element={ <UpDateProduct/>}/>
        <Route  path='user'element={ <User/>}/>
        <Route path='user/:id' element={<UpdateUser/>}/>
        <Route path='user/create' element={<Createuser/>}/>
        </Route>
        </Route>

        </Route>
      </Routes>
    </div>
  )
}

export default App
