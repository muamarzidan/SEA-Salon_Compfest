import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Service from './pages/services/index.jsx';
import DetailedService from './pages/services/detail.jsx';
import Login from './pages/auth/login.jsx';
import Register from './pages/auth/register.jsx';
import Notfound from './pages/404.jsx';
import Dashboard from './pages/dashboard/index.jsx';
import './index.css';
import { AuthProvider } from './context/auth.js';
import bringAuth from './hoc/auth.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/service",
    element: <Service />
  },
  {
    path: "/service/:serviceId",
    element: <DetailedService />
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
    path: "/dashboard",
    element: bringAuth(Dashboard)
  },
  {
    path: "*",
    element: <Notfound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </RouterProvider>
  </React.StrictMode>
);