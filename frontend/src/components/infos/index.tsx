import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import './styles.scss'

const Infos: React.FC<any> = (props: any) => {
  const [data, setData] = useState<any>()

  const generateData = () => {
    if (props) {
      const crypto = props.data
      console.log(crypto)
      console.log(data)

      switch (crypto) {
        case 'ethereum':
          setData(
            {
              id: 1,
              founder: 'Vitalik Buterin',
              investingfunds: 'Polychain, Three Arrows Capital, Andreesen Horowitz (a16z), Galaxy, Bitmain, NGC, Dragonfly Capital, SIF Ventures UK, Krenex Capital',
              marketcap: 'US $219.455.699.607,54',
              marketdominance: '18,48%'
            }
          )
          break;
        case 'bitcoin':
          setData(
            {
              id: 2,
              founder: 'Satoshi Nakamoto',
              investingfunds: 'private',
              marketcap: 'US $15.379.844.638',
              marketdominance: '45,24%',
            },
          )
          break;
        default:
          setData(
            {
              id: 2,
              founder: 'TBD',
              investingfunds: 'TBD',
              marketcap: 'TBD',
              marketdominance: 'TBD',
            }
          )
          break;
      }
    }
  }

  useEffect(() => {
    generateData()
  }, [props])

  return (
    <div className='infos'>
      <Row className="header-info" middle='md'>
        <Col md={1}></Col>
        <Col md={2}>Founder</Col>
        <Col md={3}>Investing Funds</Col>
        <Col md={3}>Mkt Cap (USD)</Col>
        <Col md={2}>Mkt Dominance</Col>
      </Row>
      {
        data && <Row className='informations' middle='md'>
          <Col md={1}>{props.data}</Col>
          <Col md={2}>{data.founder}</Col>
          <Col md={3}>{data.investingfunds}</Col>
          <Col md={3}>{data.marketcap}</Col>
          <Col md={2}>{data.marketdominance}</Col>
        </Row>
      }
    </div>
  )
}
export default Infos