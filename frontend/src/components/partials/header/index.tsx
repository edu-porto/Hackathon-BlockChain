import React from 'react' 
import Logo from '/Logo.png'

import {Col, Row} from 'react-styled-flexboxgrid'
import "./styles.scss"

const Header: React.FC = () => {
  return (
    <div className='header-container'>
      <Row>
        <Col xs={12} md={4}>
          <img src={Logo} alt="" />
        </Col>
      </Row>
    </div>
  )
}

export default Header