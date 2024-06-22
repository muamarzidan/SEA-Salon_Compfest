import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Service from './pages/service.jsx'
import Login from './pages/auth/login.jsx'
import Register from './pages/auth/register.jsx'
import Notfound from './pages/404.jsx'
import './index.css'

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/service",
    element: <Service />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "*",
    element: <Notfound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
