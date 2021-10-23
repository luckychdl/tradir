import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MaterialTable from "material-table";
import { forwardRef } from "react"

export default function WishList ({cartList,wishColumns}){
  const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />)
  }

  const realColumns = wishColumns.map(r => {
    const {tableData, ...record} = r;
    return record
  })
 
  return (
    <MaterialTable
        style={{paddingLeft:"20px"}}
        icons={tableIcons}
        columns={realColumns}
        data={
          cartList.map((data) => {
            return ({
              image_url: <img src={data.image_url} style={{width:50, height:120}} alt=""/>,
            name: data.name,
            abv: data.abv,
            brewed:data.first_brewed,
            })
          })
        }
        title=""
        options={{search:false, toolbar:false}}
      />
  )
}