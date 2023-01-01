import styled from "styled-components"
import { Background } from "../components/Home/Background"
import { Content } from "../components/Home/Content"
import { Footer } from "../components/Home/Footer"
import { Header } from "../components/Home/Header"
import { RotateFilm } from "../components/Home/RotateFilm"

export const Home = () => {
  return (
    <Container>
      <Background backgroundUrl={"/background1.svg"} cover/>
      <Background backgroundUrl={"/background2.svg"} />
      <Header />
      <Content />
      <RotateFilm />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  background: radial-gradient(50% 100%,#180526 0,#040e21 100%);
  height: 100%;
  position: relative;
  @media screen and (max-width: 1300px){
    font-size: 0.8em;
  }
  @media screen and (max-width: 600px){
    font-size: 1em;
  }
`
