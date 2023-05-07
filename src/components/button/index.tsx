import React from 'react'
import './styles.scss'

type Props = {
  text: string,
  callGenerate: VoidFunction,
  disabled: boolean,
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <button onClick={() => props.callGenerate()} disabled={props.disabled}>{props.text}</button>
  )
}

export default Button