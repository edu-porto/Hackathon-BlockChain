import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/landingPage'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router