import React, { useEffect, useState } from 'react'
import './styles.scss'
import { Col, Row } from 'react-styled-flexboxgrid'
import News from '../../components/news'
import Chart from '../../components/chart'
import Modal from '../../components/modal'
import Exchanges from '../../components/exchanges'
import Infos from '../../components/infos'
import { useLocation, useNavigate } from 'react-router-dom'

const Report: React.FC = () => {
  const {state} = useLocation();
  const navigate = useNavigate()
  const [data, setData] = useState<any>()
  const [actualNews, setActualNews] = useState(0)
  const [openedModal, setOpenedModal] = useState(false)

  useEffect(() => {
    if(!state) {
      navigate('/')
    }
    setData(state)
  }, [state])
  
  return (
    <div className='report-container'>
      <Row>
        <Col xs={12} md={6}>
          <h2 className='title'>News Summary</h2>
          <div onClick={() => setOpenedModal(true)}>
            {
              data && data.news && <News title={data.news.geral_news[actualNews].title} text={data.news.geral_news[actualNews].description} sentiment={data.news.sentiments[actualNews]}></News>
            }
          </div>
          <div className='navigation'>
            {
              data && data.news && data.news.geral_news.map((news: any, index: number) => {
                return (
                  <div className={`${actualNews === index && 'active'}`} onClick={() => setActualNews(index)} key={index}></div>
                )
              })
            }
          </div>
        </Col>
        <Col xs={12} md={6}>
          <h2 className='title center'>Price Chart</h2>
          <Chart data={data}/>
        </Col>
      </Row>
      {
        openedModal && (
          <Modal title={data.news.geral_news[actualNews].title} sentiment={data.news.sentiments[actualNews]} summary={data.news.summaries[actualNews]} url={data.news.geral_news[actualNews].url} close={() => setOpenedModal(false)}></Modal>
        )
      }
      <Row>
        <Col xs={8} md={6}>
          <h2 className='title center'>Market</h2>
          {
            data && <Exchanges content={data.exchanges_prices}/>
          }
        </Col>
        <Col xs={8} md={6}>
          <h2 className='title small center'>General Information</h2>
          {
            data && <Infos data={data.crypto}/>
          }
        </Col>
      </Row>
    </div>
  )
}

export default Report