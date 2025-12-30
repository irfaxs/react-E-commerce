import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
//pages
import HomePage from './components/pages/Home/HomePage'
import AboutPage from './components/pages/About/AboutPage'
import ContactPage from './components/pages/Contact/ContactPage'

import { Outlet } from 'react-router-dom'

function App() {
 

  return (
    <>
     <header>
<Navbar/>
     </header>
     <main>
    <Outlet/>
    
     </main>
     <footer>
    <Footer />
     </footer>
    

    </>
  )
}

export default App
