import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />,
)

/*
Removed the strictmode to avoid rendering the code two times
previous code:
<StrictMode>
    <App />
  </StrictMode>,
*/