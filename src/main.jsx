import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// tambahkan browser router
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* tambahkan disni browserrouter untuk mengapit <app> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
