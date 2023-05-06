import React from 'react'
import Container from './styled'

type Props = {
  text: string,
  callGenerate: VoidFunction,
  disabled: boolean,
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <Container onClick={() => props.callGenerate()} disabled={props.disabled}>{props.text}</Container>
  )
}

export default Button