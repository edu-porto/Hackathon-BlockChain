import React from 'react'
import { Container, NewsTitle, Sentiment, Text } from './styled'
import { Col, Grid, Row } from 'react-styled-flexboxgrid'

type Props = {
  title: string,
  text: string,
  sentiment: string,
}

const News: React.FC<Props> = (props: Props) => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <Container>
          <Row>
            <Col>
              <NewsTitle>Ethereum Price Prediction as $8 Billion Trading Vol...</NewsTitle>
            </Col>
          </Row>
          <Row>
            <Col style={{ color: props.sentiment.includes("Positive") ? 'green' : 'red' }}>
              <Sentiment>{props.sentiment}</Sentiment>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text>{props.text}</Text>
            </Col>
          </Row>
          {/* <Row>
            <Col xs={12} md={8}>
              <Author>{props.text}</Author>
            </Col>
          </Row> */}
        </Container>
      </Col>
    </Row>
  )
}

export default News