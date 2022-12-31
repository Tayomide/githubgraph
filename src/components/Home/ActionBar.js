import React from 'react'
import EastIcon from '@mui/icons-material/East';
import styled from 'styled-components';

export const ActionBar = () => {
  return (
    <Container>
      <div>
        <span className='at'>@</span>
        <input type="text" placeholder='github_username'></input>
        <span className='demacate'></span>
        <select>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
        </select>
        <button>Create a Skyline <EastIcon /></button>
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
    }
    button{
      color: #FFFFFF;
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
