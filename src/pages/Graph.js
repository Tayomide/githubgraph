import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useParams } from "react-router-dom"
import { Model } from "../components/Graph/Model"
import { Header } from "../components/Home/Header"
import styled from "styled-components"
import { Footer } from "../components/Home/Footer"
import CommentIcon from '@mui/icons-material/Comment';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Graph = () => {
  const params = useParams()
  return (
    <Container>
      <Header />
      <p className="title">@{params.user}'s <span>{params.year} Github Skyline</span></p>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[1,2,10]} intensity={1.5} />
        <pointLight position={[1,-2,-10]} intensity={1.5} />
        <OrbitControls />
        <Model user={params.user} year={params.year}/>
      </Canvas>
      <div className="button-container">
        <button>Add annotation <CommentIcon /></button>
        <button>Share on Twitter <TwitterIcon /></button>
      </div>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  a{
    color: black;
  }
  .title{
    padding-top: 100px;
    font-size: 1.5em;
    font-weight: bold;
    position: absolute;
    width: 100%;
    text-align: center;
    span{
      -webkit-background-clip: text;
      animation: gradient-animate 10s infinite alternate; 
      background-clip: text;
      background-image: linear-gradient(90deg,#db469f,#7891d5,#db469f);
      background-size: 400% 500%;
      color: transparent;
    }
  }
  .button-container{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 0;
    padding-bottom: 5em;
    flex-wrap: wrap;
    button{
      font-size: 1em;
      height: max-content;
      color: black;
      border: 2px solid black; 
      outline: 0;
      background: rgba(255, 255, 255, 0.);
      padding: 1em 1.1em;
      display: inline-flex;
      align-items: center;
      border-radius: 0.8em;
      margin-bottom: 0.3em;
      svg{
        margin-left: 0.4em;
      }
      margin-right: 1em;
      :nth-child(2){
        background-image: linear-gradient(90deg,#db469f50,#7891d550);
      }
    }
  }
  footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    ul{
      li{
        color: black;
      }
    }
  }
`
