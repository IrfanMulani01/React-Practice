import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Disp from './App'
import CounterApp from './counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Disp/>
    <CounterApp />
  </StrictMode>,
)
