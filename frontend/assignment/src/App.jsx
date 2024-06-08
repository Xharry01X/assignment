import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import ImageView from './component/imageView/ImageView'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ImageView/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
