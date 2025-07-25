import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router";
import AuthProvider from '../providers/AuthProvider.jsx';
import AllRoutes from './routes/AllRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={AllRoutes}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
