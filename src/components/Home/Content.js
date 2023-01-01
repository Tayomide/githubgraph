import styled from "styled-components"
import { ActionBar } from "./ActionBar"

export const Content = () => {
  return (
    <Container>
      <h1>Your Github story in 3D</h1>
      <p>View a 3D model of your GitHub contribution graph. Share it, print it, and more!</p>
      <ActionBar />
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100% - 3em);
  padding-top: 2.5em;
  align-items: center;
  justify-content: center;
  position: relative;
  @keyframes gradient-animate {
    50%{
      background-position: 100% 100%;
    }
  }
  h1{
    -webkit-background-clip: text;
    animation: gradient-animate 10s infinite alternate; 
    background-clip: text;
    background-image: linear-gradient(90deg,#db469f,#7891d5,#db469f);
    background-size: 400% 500%;
    color: transparent;
    font-size: 4em;
  }
  p{
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 2.66667em;
    max-width: 26.166667em;
    text-align: center;
    word-spacing: 0.03em;
  }
  @media screen and (max-width: 800px){
    font-size: 0.84em;
  }
  @media screen and (max-width: 600px){
    display: none;
  }
`
