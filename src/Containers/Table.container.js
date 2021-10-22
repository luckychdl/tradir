import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBeerListThunk } from "../Modules/Reducers/list";
import Table from "../Components/Table"
export default function TableContainer (){

  const data = useSelector((state)=>state.Table.data)
  const columns = useSelector((state)=>state.Columns.columns)
  const dispatch = useDispatch()

  const getBeerList = useCallback(()=>{
    dispatch(getBeerListThunk())
  },[dispatch])

  return <Table data={data} columns={columns} getBeerList={getBeerList}/>
}