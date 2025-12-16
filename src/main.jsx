import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/montserrat"; // defaults to 400
import "@fontsource/montserrat/700.css"; // optional weight

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
