import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Maintenance from './Maintenance.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Maintenance message='under maintenance' />
  </StrictMode>,
)