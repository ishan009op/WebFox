import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Components/Home.jsx'
import AdminRoute from './Components/Routes/ProtectedRoute.jsx'
import VerifySuccess from './Components/VerifySuccess.jsx'
import AdminPanel from './Components/AdminPanel.jsx'

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/verify-success",
      element:<VerifySuccess/>
    },{
  path:"/admin",
  element:(
    <AdminRoute>
      <AdminPanel/>
    </AdminRoute>
  )
}
    
  ]

}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
