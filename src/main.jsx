import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouteMaster from './Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouteMaster />
  </StrictMode>,
)
