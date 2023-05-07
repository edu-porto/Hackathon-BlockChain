import React from 'react'
import { Col, Row } from 'react-styled-flexboxgrid'
import './styles.scss'

import CloseIcon from '@mui/icons-material/Close'

type Props = {
  title: string,
  sentiment: string,
  close: VoidFunction;
  summary: string;
  url: string;
}

const Modal: React.FC<Props> = (props: Props) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <Row className='row'>
          <Col>
            <h2 className='news-title'>Ethereum Price Prediction as $8 Billion Trading Vol...</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Row>
              <Col style={{ color: props.sentiment.includes("Positive") ? 'green' : 'red' }}>
                <p className='sentiment'>{props.sentiment}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className='text'>{props.summary}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href={props.url} target='_blank'>Acessar notícia</a>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <img className='wordcloud' src="https://media.nngroup.com/media/editor/2012/11/18/wordle-word-cloud-applications.png" alt="" />
          </Col>
        </Row>
        <div className="close" onClick={() => props.close()}>
          <CloseIcon></CloseIcon>
        </div>
      </div>
    </div>
  )
}

export default Modal