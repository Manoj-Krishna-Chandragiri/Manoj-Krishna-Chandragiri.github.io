import React from 'react'
import { Navbar,Footer } from './Components'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
