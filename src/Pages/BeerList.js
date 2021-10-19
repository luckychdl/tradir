import React, { useEffect, useState } from "react"
import axios from "axios"
import Table from "../Components/Table"
import styled from "styled-components"
const Body = styled.div`
  width: 80%;
`
const BeerList = () => {
  const [data, setData] = useState()
  useEffect(()=>{
    const getData = async () => {
      const beerListData = await axios.get("https://api.punkapi.com/v2/beers")
      setData(beerListData)
    }
    getData()
  },[])
  console.log(data)

  return (
    <Body>
      <Table />
    </Body>
  )
}
export default BeerList