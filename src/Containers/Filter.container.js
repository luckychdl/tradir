import {  useSelector } from "react-redux";
import Filter from "../Components/Filter";

export default function FilterContainer (props){
  const {value1st, setValue1st, value2nd ,setValue2nd, value3rd, setValue3rd} = props
  const data = useSelector((state)=>state.Table.data) 
  
  const filterValue = useSelector((state)=>state.Table.value)
  return <Filter   filterValue={filterValue} data={data} value1st={value1st} setValue1st={setValue1st} value2nd={value2nd} setValue2nd={setValue2nd} value3rd={value3rd} setValue3rd={setValue3rd}/>
}