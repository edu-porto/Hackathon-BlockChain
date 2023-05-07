import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/landingPage'
import Home from '../pages/home'
import Header from '../components/partials/header'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/*' element={<Home />}></Route>
                <Route path='/buy' element={<LandingPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router