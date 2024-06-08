import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import ImageView from './component/imageView/ImageView'
import Login from './component/auth/login/Login'
import Register from './component/auth/register/Register'
import Authentication from './component/authenticationPage/Authentication'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ImageView/>}/>
        <Route path='/authentication' element={<Authentication/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
