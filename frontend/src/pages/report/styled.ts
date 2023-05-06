import styled from "styled-components"

const Container = styled.div `
width: 100%;
  div {
    max-width: 100%;
  }
`

const Title = styled.h2`
  word-wrap: break-word;
  font-size: 30px;
  font-weight: 400;
  margin: 20px 40px 20px 40px;
  width: 100%;
`

const Navigation = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
  div {
    width: 16px;
    height: 16px;
    background-color: #40404040;
    border-radius: 50%;
    margin-right: 8px;
  }

  .active {
    background-color: #404040;
  }
`

export {Container, Title, Navigation}