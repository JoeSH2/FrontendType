import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/style/index.scss'
import App from './app/ui/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
