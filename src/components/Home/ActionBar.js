import { useRef } from 'react'
import EastIcon from '@mui/icons-material/East';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom"

export const ActionBar = () => {
    const user = useRef()
    const year = useRef()
    const navigate = useNavigate();
    const navigateTo = () =>{
      if(user.current.value && year.current.value)navigate(`/${user.current.value}/${year.current.value}`)
    };
  return (
    <Container>
      <div>
        <span className='at'>@</span>
        <input type="text" placeholder='github_username' ref={user} />
        <span className='demacate'></span>
        <select ref={year}>
          {
            (new Array(15).fill((new Date()).getFullYear())).map((year, key) => <option value={year - key} key={key}>{year-key}</option>)
          }
        </select>
        <button onClick={navigateTo}>Create a Skyline <EastIcon /></button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-image: linear-gradient(90deg,#db469f, #7891d5);
  margin: 5em;
  height: calc(1.5em + 1.25em + 1.25em);
  width: 45%;
  color: #757575;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  :focus-within{
    color: #FFFFFF;
  }
  div{
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: #040e21;
    height: calc(100% - 0.3em);
    width: calc(100% - 0.3em);
    border-radius: 1em;
    .at{
      width: max-content;
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: inherit;
      padding-left: 1em;
      display: inline-flex;
      align-items: center;
    }
    input{
      font-size: 1.25em;
      background: transparent;
      border: 0;
      color: inherit;
      flex: 1;
      outline: 0;
      padding: 0;
    }
    .demacate{
      background-image: linear-gradient(#db469f, #7891d5);
      height: 45%;
      width: 0.4px;
      opacity: 0.4;
      margin-right: 1em;
    }
    select{
      border: 0;
      outline: 0;
      color: white;
      font-size: 1.2em;
      background: transparent;
      width: 3.5em;
      margin-right: 0.4em;
      option{
        color: black;
      }
    }
    button{
      color: #FFFFFF;
      cursor: pointer;
      background-image: linear-gradient(90deg,#db469f,#7891d5);
      border-radius: 0.833333em; // 1em
      outline: 0;
      border: 0;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.25em;
      padding: 0 1.36363636em;
      font-weight: bold;
      height: 100%;
      svg{
        margin-left: 0.833333em;
      }
    }
  }
`
