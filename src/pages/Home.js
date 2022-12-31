import styled from "styled-components"
import { Background } from "../components/Home/Background"
import { Content } from "../components/Home/Content"
import { Footer } from "../components/Home/Footer"
import { Header } from "../components/Home/Header"

export const Home = () => {
  return (
    <Container>
      <Background backgroundUrl={"/background1.svg"} cover/>
      <Background backgroundUrl={"/background2.svg"} />
      <Header />
      <Content />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  background: radial-gradient(50% 100%,#180526 0,#040e21 100%);
  height: 100%;
  position: relative;
`
