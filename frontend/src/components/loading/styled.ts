import styled from "styled-components";

const Container = styled.div`
  z-index: 2;
  position: fixed;
  display: flex;
  left: 50vw;
  top: 40vh;
  display: inline-block;
  width: 80px;
  height: 80px;

  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid white;
    border-color: white transparent white transparent;
    animation: loading 1.2s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

export default Container