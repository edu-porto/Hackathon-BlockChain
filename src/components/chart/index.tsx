import { useEffect, useState } from 'react'

import './styles.scss'

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Col, Row } from 'react-styled-flexboxgrid';

const Chart = (props: any) => {
  const [data, setData] = useState<any>()

  const generateData = () => {
    const newData: any = []

    if (props.data) {
      props.data.hist_data.price_timeline.map((hist: any, index: number) => {
        if (index === 0 || index === hist.length - 1) {
          newData.push({
            name: hist.date,
            uv: hist.price
          })
        }
        else {
          newData.push({
            name:  hist.date,
            uv: hist.price
          })
        }
      })
    }
    setData(newData)
  }

  useEffect(() => {
    generateData()
  }, [props])
  return (
    <Row>
      <Col xs={8} md={6}>
        {
          data && <LineChart width={600} height={250} className='chart' data={data}>
            <Line type="step" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        }
      </Col>
    </Row>
  )
}

export default Chart