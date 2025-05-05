import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { Contact, About, Projects, Home } from './Components'
import './index.css'

// Configure with future flags to silence warnings
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "about",
          element: <About/>
        },
        {
          path: "contact", 
          element: <Contact/>
        },
        {
          path: "projects",
          element: <Projects/>  
        },
        {
          path: "",
          element: <Home/>
        }
      ]
    }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
