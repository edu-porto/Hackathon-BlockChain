import React from 'react'
import Select from 'react-select'
import './styles.scss'
type Props = {
  options: {value: string, label: string}[],
  placeholder: string,
  onChange: (value: any) => void,
}

const SelectComponent: React.FC<Props> = (props: Props) => {

  
  return (
    <div className='select-container'>
      <Select options={props.options} placeholder={props.placeholder} onChange={(value) => props.onChange(value)}/>
    </div>
  )
}

export default SelectComponent as Select