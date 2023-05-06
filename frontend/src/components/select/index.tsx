import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Container from './styled'

type Props = {
  options: {value: string, label: string}[],
  placeholder: string,
  onChange: (value: any) => void,
}

const SelectComponent: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Select options={props.options} placeholder={props.placeholder} onChange={(value) => props.onChange(value)}/>
    </Container>
  )
}

export default SelectComponent as Select