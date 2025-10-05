import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Head from './Components/Header/Head'
import Footer from './Components/Footer/Footer'
import TNavbar from './Components/Header/TNavbar'
import Month from './Components/CookForAmonth/Month'
import ChefConnection from './Components/ChefConnection/ChefConnection'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const App = () => {
  return (
    <div>
      
    <Head/>
    <TNavbar/>
      <Routes>
       <Route path='/home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Month' element={<Month/>}/>
        <Route path='/Join-as-Chef' element={<ChefConnection/>}/>

      </Routes>
      <Footer/>

    </div>
  )
}

export default App