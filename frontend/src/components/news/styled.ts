import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-left: solid 2px #404040;
  margin-left: 40px;
  padding: 10px 40px;
  width: 100%;
  gap: 16px;

  :hover {
    background-color: #40404040;
    cursor: pointer
  }
`

const NewsTitle = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 400;
`

const Sentiment = styled.div`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 400;
`

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  min-width: 500px;
`

// const Author = styled.p`
//   margin-left: 8px;
//   font-size: 16px;
//   font-weight: 400;

//   b {
//     color: #AB8B51;
//   }
// `

export {Container, NewsTitle, Sentiment, Text}