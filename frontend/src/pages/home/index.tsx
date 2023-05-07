import React, { useEffect, useState } from 'react'
import "./styles.scss"
import Select from '../../components/select'
import { Row, Col } from 'react-styled-flexboxgrid'
import Button from '../../components/button'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Report from '../report'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [disabled, setDisabled] = useState(true)
  const [selected, setSelected] = useState<any>()

  const options = [
    { value: 'bitcoin', label: 'Bitcoin' },
    { value: 'ethereum', label: 'Ethereum' },
    { value: 'litecoin', label: 'Litecoin' }
  ]

  useEffect(() => {
    if (selected && disabled) {
      setDisabled(false)
    }
  }, [selected, disabled])

  const generateReport = () => {
    if (selected) {
      navigate('/report')
    }
  }

  return (
    <div className='home-container'>
      <Row center='xs'>
        <Col xs={8} md={3} lg={3}>
          <Select options={options} placeholder="Select crypto" onChange={(option: any) => setSelected(option.value)}></Select>
        </Col>
        <Col xs={12} md={1} lg={1}>
          <Button disabled={disabled} text="Generate Report" callGenerate={() => generateReport()}></Button>
        </Col>
      </Row>

      <Routes>
        <Route path='/report' element={<Report />}></Route>
      </Routes>
    </div>
  )
}

export default Home