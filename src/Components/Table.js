import React, { useEffect } from "react";
import MaterialTable from "material-table"
import { ShoppingCartOutlined } from "@ant-design/icons"
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { forwardRef } from "react";
import styled from "styled-components"
import Filter from "./Filter";

const Table = ({data, columns, getBeerList}) => {
  const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />)
  }
  const BeerList = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
  `
  const Title = styled.div`
    font-size: 28px;
    margin: 10px 0 10px 10px;
  `
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
  `

  useEffect(() =>{
    getBeerList()
  },[getBeerList])

  
  return (
    <BeerList >
      <Wrapper>
        <Title>BEER LIST</Title>
        <Filter />
      </Wrapper>
      <MaterialTable
        style={{paddingLeft:"20px"}}
        icons={tableIcons}
        columns={columns}
        data={data.map((data) =>{
          return ({
            image_url: <img src={data.image_url} style={{width:50, height:120}} alt=""/>,
            name: data.name,
            abv: data.abv,
            brewed:data.first_brewed,
            cart: <ShoppingCartOutlined style={{fontSize:24, textAlign:"center"}}/>
          })
        })}
        title=""
        options={{search:false, toolbar:false}}
      />
    </BeerList>
  )
}

export default Table

