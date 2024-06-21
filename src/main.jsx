import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Care from './pages/service/care.jsx'
import Hair from './pages/service/haircut.jsx'
import Facial from './pages/service/facial.jsx'
import Notfound from './pages/404.jsx'
import './index.css'

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/service/haircut-styling",
    element: <Hair />
  },
  {
    path: "/service/manicure-pedicure",
    element: <Care />
  },
  {
    path: "/service/facial-treatment",
    element: <Facial />
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
