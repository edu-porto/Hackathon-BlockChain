import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/landingPage'
import Home from '../pages/home'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router