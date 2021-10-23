import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBeerListThunk } from "../Modules/Reducers/list";
import Table from "../Components/Table"
export default function TableContainer (){

  const data = useSelector((state)=>state.Table.data)
  const columns = useSelector((state)=>state.Columns.columns)
  const cartList = useSelector((state)=>state.Table.cartList)
  const dispatch = useDispatch()

  const getBeerList = useCallback(()=>{
    dispatch(getBeerListThunk())
  },[dispatch])

  return <Table data={data} cartList={cartList} columns={columns} getBeerList={getBeerList}/>
}