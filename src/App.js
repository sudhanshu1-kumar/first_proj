import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Component/Login'
import About from './Component/NevMenu/About'
import Prog from './Component/NevMenu/Prog'
import Course from './Component/NevMenu/Course'

import Footer from './Component/Footer'
import Bgvideo from './Component/Bgvideo'
import Contact from './Component/NevMenu/Contact'





function App() {
  return (

    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      
        
        
        
          <Route exact path='/'element={<Bgvideo/>} />


          <Route exact path='/Login'element={<Login/>} />
        
      
          <Route exact path='/About'element={<About/>} />
        
      
          <Route exact path='/Prog'element={<Prog/>} />

          <Route exact path='/Contact'element={<Contact/>} />
        
        
          <Route exact path='/Course'element={<Course/>} />
        </Routes>
        
    </BrowserRouter>
    <Footer></Footer>
  
    </>
  )
}

export default App