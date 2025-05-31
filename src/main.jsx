import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Galery from './components/Galery/Galery.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Galery />
  </StrictMode>,
)
