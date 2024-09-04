import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <NavBar/>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
)
