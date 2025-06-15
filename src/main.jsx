import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <HelmetProvider>
 <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
 </HelmetProvider>
  </StrictMode>,
)
