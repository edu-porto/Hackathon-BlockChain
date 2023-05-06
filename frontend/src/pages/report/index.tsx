import React, { useState } from 'react'
import './styles.scss'
import { Col, Row } from 'react-styled-flexboxgrid'
import News from '../../components/news'
import Chart from '../../components/chart'

const news = {
  geral_news: [
    {
      description: "individuals to buy or sell crypto. Now, the company is going further into the once-heralded digital curren…",
      title: "for some reason",
      url: "https://www.engadget.com/venmo-now-lets-you-send-crypto-to-other-users-for-some-reason-192015694.html"
    },
    {
      description: "Paypal-owned money transfer service Venmo dipped its toes into cryptocurrencies in 2021 after opening up an in-app trading platform.\r\n That was just for individuals to buy or sell crypto. Now, the company is going further into the once-heralded digital curren…",
      title: "Venmo now lets you send crypto to other users for some reason",
      url: "https://www.engadget.com/venmo-now-lets-you-send-crypto-to-other-users-for-some-reason-192015694.html"
    },
  ],
  sentiments: [
    "\n\nPositive",
    "\n\nNegative",
  ],
}

const Report: React.FC = () => {
  const [actualNews, setActualNews] = useState(0)
  return (
    <div className='report-container'>
      <Row>
        <Col xs={12} md={6}>
          <h2 className='title'>News Summary</h2>
          {
            <News title={news.geral_news[actualNews].title} text={news.geral_news[actualNews].description} sentiment={news.sentiments[actualNews]}></News>
          }
          <div className='navigation'>
            {
              news.geral_news.map((news: any, index: number) => {
                return (
                  <div className={`${actualNews === index && 'active'}`} onClick={() => setActualNews(index)} key={index}></div>
                )
              })
            }
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Chart />
        </Col>
      </Row>
      {/* <Row>
        <Title>Block</Title>
        {
          <News title={news.geral_news[actualNews].title} text={news.geral_news[actualNews].description} sentiment={news.sentiments[actualNews]}></News>
        }
      </Row> */}
    </div>
  )
}

export default Report