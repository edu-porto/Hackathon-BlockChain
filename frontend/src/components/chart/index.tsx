import React from 'react'

import './styles.scss'

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Col, Row } from 'react-styled-flexboxgrid';
const data = [
  { name: 'Jan', uv: 100 },
  { name: 'Feb', uv: 200 },
  { name: 'Mar', uv: 200, pv: 2100, amt: 2400 },
  { name: 'April', uv: 400, pv: 2400, amt: 2400 },
];

const Chart = () => {
  return (
    <Row>
      <Col xs={8} md={6}>
        <LineChart width={600} height={200} className='chart' data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </Col>
    </Row>
  )
}

export default Chart