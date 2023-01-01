import styled from "styled-components"
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container to="/"><GitHubIcon sx={{width:36, height:36}}/>Resist Desist</Container>
  )
}

const Container = styled(Link)`
  align-items: center;
  color: #FFFFFF;
  display: inline-flex;
  flex-direction: row;
  font-size: 1.55em;
  font-weight: bold;
  left: 3.5rem;
  position: absolute;
  text-decoration: none;
  top: 3rem;
  svg{
    margin-right: 0.28em
  }
  @media screen and (max-width: 600px){
    /* left: 1.5rem;
    top: 1em; */
    display: none;
  }
`