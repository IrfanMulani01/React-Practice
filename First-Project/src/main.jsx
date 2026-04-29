import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Disp from './App'
import CounterApp from './counter'
import Toggle from './toggle'
import Forminput from './forminput'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toggle/>
    <Disp/>
    {/* <CounterApp /> */}

    <Forminput />
  </StrictMode>,
)
