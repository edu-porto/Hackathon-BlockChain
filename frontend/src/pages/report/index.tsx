import React, { useState } from 'react'
import './styles.scss'
import { Col, Row } from 'react-styled-flexboxgrid'
import News from '../../components/news'
import Chart from '../../components/chart'
import Modal from '../../components/modal'
import Exchanges from '../../components/exchanges'
import Infos from '../../components/infos'

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
  summaries: [
    "Venmo, the PayPal-owned money transfer service, is now allowing users to send cryptocurrencies directly to other Venmo customers. The move is intended to simplify the process of sending cryptocurrencies, which can be confusing for some users. The feature will be rolled out in the coming weeks, but is only available to users in certain US states and for specific cryptocurrencies such as Bitcoin and Ethereum. Venmo reminds users that transfers cannot be cancelled or reversed, so it's important to double-check the recipient's details before sending. Despite cooling interest in cryptocurrencies, Venmo's trading platform has seen steady growth, with 75% of its crypto customers holding onto their funds since 2021 and 50% expanding their balance since the beginning of 2023.",
    "The Commodities Futures Trading Commission (CFTC) has won a $3.4bn default judgment against South African man Cornelius Johannes Steynberg, who is accused of defrauding investors out of billions of bitcoin through his online currency commodity pool, Mirror Trading International. The CFTC claimed Steynberg's multi-level marketing scheme lied about trading on off-exchange retail foreign currency and used fake account statements to trick investors. Steynberg and the company must each pay $1.73bn in civil penalties. However, it is unclear whether investors will receive any restitution, as MTI is undergoing liquidation proceedings in South Africa after declaring bankruptcy in 2021."
  ],
  exchanges_prices: [
    {
      base: "ETH",
      last: 1883.4,
      market: "Bitfinex",
      target: "USDT",
      trustScore: "green",
      volume: 3467.98241851
    },
    {
      base: "ETH",
      last: 1883.4,
      market: "Bitfinex",
      target: "USDT",
      trustScore: "green",
      volume: 3467.98241851
    },
    {
      base: "ETH",
      last: 1883.4,
      market: "Bitfinex",
      target: "USDT",
      trustScore: "green",
      volume: 3467.98241851
    },
  ]
}

const Report: React.FC = () => {
  const [actualNews, setActualNews] = useState(0)
  const [openedModal, setOpenedModal] = useState(false)
  return (
    <div className='report-container'>
      <Row>
        <Col xs={12} md={6}>
          <h2 className='title'>News Summary</h2>
          <div onClick={() => setOpenedModal(true)}>
            {
              <News title={news.geral_news[actualNews].title} text={news.geral_news[actualNews].description} sentiment={news.sentiments[actualNews]}></News>
            }
          </div>
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
          <h2 className='title center'>Price Chart</h2>
          <Chart />
        </Col>
      </Row>
      {
        openedModal && (
          <Modal title={news.geral_news[actualNews].title} sentiment={news.sentiments[actualNews]} summary={news.summaries[actualNews]} url={news.geral_news[actualNews].url} close={() => setOpenedModal(false)}></Modal>
        )
      }
      <Row>
        <Col xs={8} md={6}>
          <h2 className='title center'>Market</h2>
          <Exchanges content={news.exchanges_prices}/>
        </Col>
        <Col xs={8} md={6}>
          <h2 className='title small center'>General Information</h2>
          <Infos/>
        </Col>
      </Row>
    </div>
  )
}

export default Report