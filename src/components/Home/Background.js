import styled from "styled-components"

export const Background = ({backgroundUrl, cover}) => {
  return (
    <Container backgroundUrl={backgroundUrl} cover={cover}></Container>
  )
}

const Container = styled.div`
  background: url("${props => props.backgroundUrl}") no-repeat fixed center;
  background-size: ${props => props.cover? "cover": "auto"};
  height: 100%;
  position: absolute;
  width: 100%;
`
