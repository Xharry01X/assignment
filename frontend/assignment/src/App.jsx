import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
// import ImageView from './component/imageView/ImageView'
import Login from './component/auth/login/Login'
import Register from './component/auth/register/Register'
// import Authentication from './component/authenticationPage/Authentication'
import TitlebarImageList from './component/imageView/ImageView'
import Header from './component/header/Header'
import SingleImage from './component/singleImage/SingleImage'
import Upload from './component/upload/Upload'

function App() {
  

  return (
    <>
    <Header/>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<TitlebarImageList/>}/>
     
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/image/:id' element={<SingleImage/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
