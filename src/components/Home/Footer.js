import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <Container>
      <ul>
        <li>
          <p>Made with ♥ by GitHub</p>
          <p className='blur'>VR Ready</p>
        </li>
        <li>
          <Link to="/">Terms</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">FAQ</Link>
        </li>
      </ul>
    </Container>
  )
}

const Container = styled.footer`
  ul{
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    height: 3em;
    justify-content: space-between;
    list-style: none;
    padding: 0 3.5em;
    position: relative;
    li{
      color: white;
      display: flex;
      flex-direction: row;
      gap: 1em;
      a, p{
        color: inherit;
      }
      a{
        text-decoration: none;
      }
      .blur{
        color: #B5B6BC;
      }
    }
    @media screen and (max-width: 370px){
      flex-direction: column-reverse;
      align-items: center;
      padding: 0;
    }
  }
`
