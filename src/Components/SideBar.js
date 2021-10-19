import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"
import SideBarItem from "../Commons/SideBarItem";

const Side = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  
`
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width:200px;
`
const Wrapper = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  width:20%;
  
`
const Title = styled.div`
  display: flex;
  font-size: 40px;
  justify-content: center;
  margin-bottom: 60px;
`

const SideBar =() => {
  const menus = [
    {name: "HOME", path:"/home"},
    {name: "BEER LIST", path:"/beerList"},
    {name: "BASKET", path:"/basket"},
    
  ]

  return (
    <Wrapper>
    <Title>TRADIR</Title>
    <Side>
      <Menu>
        {menus.map((list, index) => {
          return (
            <NavLink to={list.path} key={index} style={{color: "gray", textDecoration: "none"}} activeStyle={{color: "black"}}>
              <SideBarItem list={list}/>
            </NavLink>
          )
        })}
      </Menu>
    </Side>
  </Wrapper>
  )
}
export default SideBar