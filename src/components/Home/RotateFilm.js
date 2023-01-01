import styled from "styled-components"
import GitHubIcon from '@mui/icons-material/GitHub';

export const RotateFilm = () => {
  return (
    <Container>
      <p className="header"><GitHubIcon sx={{width: 28, height: 28}} /> Skyline</p>
      <svg height="127" viewBox="0 0 122 127" width="122" xmlns="http://www.w3.org/2000/svg" class="mx-auto" data-v-35af328c=""><g fill="none" fill-rule="evenodd"><path d="M58 33H6a4 4 0 00-4 4v84a4 4 0 004 4h52a4 4 0 004-4V37a4 4 0 00-4-4zm29.756 40H108a4 4 0 014 4v5.976M104 117H87.874zm.814-80.1A47.848 47.848 0 0082.499 7.937 47.85 47.85 0 0046.03 3.155m48.535 27.883l10.393 6 6-10.393" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path><path d="M10 65.244V45a4 4 0 014-4h5.976M54 49v16.126zm0 44.132V113a4 4 0 01-4 4h-3.994m-27.986 0H14a4 4 0 01-4-4V93.214M66.603 125h49.714c2.034 0 3.683-1.79 3.683-4V69c0-2.21-1.649-4-3.683-4H62m50 26v8m-86 18h12M28 41h8" opacity=".504" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path><path d="M112 115a2 2 0 110 4 2 2 0 010-4zm0-8a2 2 0 110 4 2 2 0 010-4zM46 39a2 2 0 110 4 2 2 0 010-4zm8 0a2 2 0 110 4 2 2 0 010-4z" fill="#fff" fill-rule="nonzero"></path></g></svg>
      <h1>Please rotate your device</h1>
      <p>Visit in desktop for the best experience</p>
    </Container>
  )
}

const Container = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: calc(100% - 3em);
  .header{
    color: white;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.4em;
    svg{
      margin-right: 0.2em;
    }
  }
  h1{
    -webkit-background-clip: text;
    animation: gradient-animate 10s infinite alternate; 
    background-clip: text;
    background-image: linear-gradient(90deg,#db469f,#7891d5,#db469f);
    background-size: 400% 500%;
    color: transparent;
    font-size: 1.8em;
    text-align: center;
  }
  p{
    color: white;
  }
  @media screen and (max-width: 600px){
    display: flex;
  }
`