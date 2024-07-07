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
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
  },
  {
    path: "/service",
    element: (
      <AuthProvider>
        <Service />
      </AuthProvider>
    ),
  },
  {
    path: "/service/:serviceId",
    element: (
      <AuthProvider>
        <DetailedService />
      </AuthProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthProvider>
        <Register />
      </AuthProvider>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <AuthProvider>
        {React.createElement(bringAuth(Dashboard))}
      </AuthProvider>
    ),
  },
  {
    path: "*",
    element: (
      <AuthProvider>
        <Notfound />
      </AuthProvider>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);