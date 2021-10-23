
import { useSelector } from "react-redux"
import WishList from "../Components/WishList"


export default function WishContainer (){
  const cartList = useSelector((state)=>state.Table.cartList)
  const wishColumns = useSelector((state)=>state.Columns.columns)

  return <WishList cartList={cartList} wishColumns={wishColumns} />
}