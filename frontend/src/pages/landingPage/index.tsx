import React from 'react'
import "./styles.scss"
import { Row, Col } from 'react-styled-flexboxgrid'
import { useNavigate } from 'react-router-dom'

const LandingPage: React.FC = () => {
  const navigate = useNavigate()

  const connect = async () => {
    // Connect to wallet with await
    return 'connected'
  }

  const subscribe = async () => {
    return 'subscribed'
  }

  const handle: any = async () => {
    // call wallet function with await

    // call purchase subscription function with await
    return 'task finished'
  }

  return (
    <div className='landing-page'>
      <Row middle='md' center='md' className='intro'>
        <h1>Our research HUB for your better <b>Decisions</b></h1>
      </Row>
      
      <Row middle='md' center='md'>
        <button className='button' onClick={(() => handle)}>Start</button>
      </Row>

      <Row center='md' middle='md' >
        <Col md={3} className='benefits-container'>
          <p>
            <b>Análise de Sentimento</b>
          </p>
          <p>
            Com base nos dados processados, o sistema indica se o cripto ativo apresenta tendência positiva, negativa ou neutra.
          </p>
        </Col>
        <Col md={3} className='benefits-container'>
          <p>
            <b>Resumo de Notícias do Mercado</b>
          </p>
          <p>
            Por meio de inteligência artificial, o sistema filtra notícias sobre o cripto ativo pesquisado e gera um resumo geral das informações obtidas.
          </p>
        </Col>
        <Col md={3} className='benefits-container'>
          <p>
            <b>AAnálise Quantitativa</b>
          </p>
          <p>
            Através da análise dos dados processados pela inteligência artificial, o sistema produz uma avaliação do criptoativo em questão.
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default LandingPage