import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routes/router'
import Header from './components/partials/header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Router />
  </React.StrictMode>,
)
