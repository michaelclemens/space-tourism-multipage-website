import App from './App.tsx'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/space-tourism-multipage-website">
      <App />
    </BrowserRouter>
  </StrictMode>
)
