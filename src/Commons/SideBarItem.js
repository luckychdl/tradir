import React from "react";
import styled from "styled-components";

const Title = styled.div`
  
`
const List = styled.div`
  font-size: 28px;
  margin: 10px 0 50px 10px;
`

const SideBarItem =({list}) =>{

  return (
    <>
    <Title>TRADIR</Title>
    <List>
      {list.name}
    </List>
    </>
  )
}

export default SideBarItem