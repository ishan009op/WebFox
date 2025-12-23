import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import {Outlet} from 'react-router-dom'
import Web from './Components/Overlay.jsx'
import CursorFollower from './Components/CursorFollower.jsx'
import Footer from './Components/Footer.jsx'

function App() {


  return (
   <>
   <CursorFollower/>
   <Header/>
   <Outlet/>
   <Footer/>
    {/* <Web/> */}
   </>
  )
}

export default App
