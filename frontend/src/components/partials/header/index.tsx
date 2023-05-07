import React, { useEffect, useState } from 'react'
import Logo from '/Logo.png'

import { Col, Row } from 'react-styled-flexboxgrid'
import "./styles.scss"
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    if (window.location.href.includes('/buy')) {
      setShowLogin(true)
    }
  }, [])

  return (
    <div className='header-container'>

      <Row>
        <Col xs={12} md={4}>
          <img src={Logo} alt="" />
        </Col>
        <Col md={8}>
          {
            showLogin && <a href='/'>
              <button className='login-button' >Login</button>
            </a>
          }
        </Col>
      </Row>

    </div>
  )
}

export default Header