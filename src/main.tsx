import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Maintenance from './components/Maintenance.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Maintenance message='under maintenance' />
  </StrictMode>,
)