import React from 'react'
import { Navbar, Footer } from './Components'
import { Outlet } from 'react-router-dom'
import RouteChangeTracker from './components/RouteChangeTracker'

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <RouteChangeTracker />
      <Footer />
    </>
  )
}

export default App
