import styled from "styled-components"

const Container = styled.button`
  width: 100%;
  height: 40px;
  background-color: #AB8B51;
  color: white;
  border-radius: 9px;
  border: none;
  text-align: center;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }

  :disabled {
    opacity: 0.7;
    cursor: auto;
  }
`

export default Container