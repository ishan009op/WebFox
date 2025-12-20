import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Work from './Components/Work.jsx'
import Services from './Components/Services.jsx'
const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/work",
      element:<Work/>
    },
    {
      path:"/services",
      element:<Services/>
    }
  ]

}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
