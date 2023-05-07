import React from 'react'
import { Col, Row } from 'react-styled-flexboxgrid'

import './styles.scss'

type Props = {
  content:
  {
    base: string,
    last: number,
    market: string,
    target: string,
    trustScore: string,
    volume: number,
  }[]
}

const Exchanges: React.FC<Props> = (props: Props) => {
  return (
    <div className='exchanges'>
      <div className="exchanges-container">
        <Row middle='md'>
          <Col xs={12} md={12}>
            <Row center='md' className='label'>
              <Col md={2}>Exchanges</Col>
              <Col md={2}>Price</Col>
              <Col md={2}>Market</Col>
              <Col md={1}>Target</Col>
              <Col md={2}>Trust Score</Col>
              <Col md={2}>Volume</Col>
            </Row>
            {
              props.content && props.content.map((exchange: any, index: number) => {
                return (
                  <Row center='md' className='row' key={index}>
                    <Col md={2}>{exchange.base}</Col>
                    <Col md={2}>{exchange.last}</Col>
                    <Col md={2}>{exchange.market}</Col>
                    <Col md={1}>{exchange.target}</Col>
                    <Col md={2} className='icon-container'>
                      <div className='icon' style={{ backgroundColor: `${exchange.trustScore === 'green' ? 'green' : 'red'}` }}></div>
                    </Col>
                    <Col md={2}>{exchange.volume}</Col>
                  </Row>
                )
              })
            }
          </Col>
        </Row>
      </div>
    </div >
  )
}

export default Exchanges