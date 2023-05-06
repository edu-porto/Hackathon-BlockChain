import React from 'react' 
import Logo from '/Logo.png'

import Container from './styled'

import {Col, Row} from 'react-styled-flexboxgrid'

const Header: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <img src={Logo} alt="" />
        </Col>
      </Row>
    </Container>
  )
}

export default Header