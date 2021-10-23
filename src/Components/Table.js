import React, { useEffect, useState } from "react";
import MaterialTable from "material-table"
import { ShoppingCartOutlined } from "@ant-design/icons"
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { forwardRef } from "react";
import styled from "styled-components"
import FilterContainer from "../Containers/Filter.container";

const Table = ({data, columns, getBeerList}) => {
  const [value1st, setValue1st] = useState(true);
  const [value2nd, setValue2nd] = useState(true);
  const [value3rd, setValue3rd] = useState(true);
  const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />)
  }
  const realColumns = columns.map(r => {
    const {tableData, ...record} = r;
    return record
  })
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
 
  const filterList = () => {
    let list = data.reduce((acc, cur) => {
      console.log(cur.abv)
      if(value1st && cur.abv >=0 && cur.abv <= 5) {
        acc.push(cur)
      }else if(value2nd && cur.abv >=6 && cur.abv <= 11) {
        acc.push(cur)
      }else if(value3rd && cur.abv >= 12) {
        acc.push(cur)
      }
      return acc
    },[])
    return list
  }
  
  return (
    <BeerList >
      <Wrapper>
        <Title>BEER LIST</Title>
        <FilterContainer 
        value1st={value1st} setValue1st={setValue1st} value2nd={value2nd} setValue2nd={setValue2nd} value3rd={value3rd} setValue3rd={setValue3rd}
        />
      </Wrapper>
      <MaterialTable
        style={{paddingLeft:"20px"}}
        icons={tableIcons}
        columns={realColumns}
        data={
          value1st&&value2nd&&value3rd ? 
          data.map((data) =>{
          return ({
            image_url: <img src={data.image_url} style={{width:50, height:120}} alt=""/>,
            name: data.name,
            abv: data.abv,
            brewed:data.first_brewed,
            cart: <ShoppingCartOutlined style={{fontSize:24, textAlign:"center"}} />
          })
        })
          :
          filterList().map((filterData)=>{
            return (
              {
              image_url: <img src={filterData.image_url} style={{width:50, height:120}} alt=""/>,
              name: filterData.name,
              abv: filterData.abv,
              brewed:filterData.first_brewed,
              cart: <ShoppingCartOutlined style={{fontSize:30, textAlign:"center", cursor:"pointer"}}/>
            }
            )
          })
        }
        title=""
        options={{search:false, toolbar:false}}
      />
    </BeerList>
  )
}

export default Table

