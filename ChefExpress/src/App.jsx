import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/home'
import Head from './Components/Header/Head'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Header/navbar'



const App = () => {
  return (
    <div>
      
    <Head/>
    <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App