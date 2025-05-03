import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createRoutesFromElements, createHashRouter, RouterProvider } from 'react-router-dom'
import {Home,About,Contact,Projects} from './Components/index.js'
import ReactGA from "react-ga4";

// Initialize Google Analytics
ReactGA.initialize("G-8GWXHMP3RB");

const router = createHashRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='projects' element={<Projects/>}/>
    <Route path='' element={<Home/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
