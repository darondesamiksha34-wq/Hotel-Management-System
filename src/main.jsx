import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="246359626517-mm5b1to2end31s8krih46v5l0g7b1kff.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </BrowserRouter>,
)
