import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import './styles.scss'

const Infos: React.FC = () => {
  return (
    <div className='infos'>
      <Row className="header-info" middle='md'>
        <Col md={1}></Col>
        <Col md={2}>Founder</Col>
        <Col md={3}>Investing Funds</Col>
        <Col md={3}>Mkt Cap (USD)</Col>
        <Col md={3}>Mkt Dominance</Col>
      </Row>
      <Row className='informations' middle='md'>
        <Col md={1}>BTC</Col>
        <Col md={2}>Satoshi Nakamoto</Col>
        <Col md={3}>Privado</Col>
        <Col md={3}>$15.379.844.638</Col>
        <Col md={3}>45,24%</Col>
      </Row>
    </div>
  )
}
export default Infos