import React from 'react'
import { Col, Row } from 'react-styled-flexboxgrid'

import './styles.scss'

type Props = {
  title: string,
  text: string,
  sentiment: string,
}

const News: React.FC<Props> = (props: Props) => {
  return (
    <div className='news-container'>
      {/* <Row>
        <Col xs={8} md={6} > */}
          <Row className='row'>
            <Col>
              <h2 className='news-title'>{props.title}</h2>
            </Col>
          </Row>
          <Row>
            <Col style={{ color: props.sentiment.includes("Positive") ? 'green' : 'red' }}>
              <p className='sentiment'>{props.sentiment}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={8} md={6}>
              <p className='text'>{props.text}</p>
            </Col>
          </Row>
        {/* </Col>
      </Row> */}
    </div>
  )
}

export default News