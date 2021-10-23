import React from 'react'
import styled from "styled-components"
const Wrapper = styled.div`
  width:80%;
  height:90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Main = styled.div`
  font-size: 40px;
  margin: 30px 0;
  width: 100%;
  text-align: center;
`
const Image = styled.img`
  width:70%;
`
const Home = () => {
  return (
    <Wrapper>
        <Main>
          TRADIR BEER
        </Main>
        <Image src="/Image/beer.jpeg" />
        <Main>ENJOY THE BEER</Main>
        </Wrapper>
  )
}

export default Home
