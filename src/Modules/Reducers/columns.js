
export const COLUMN_HEADER = "COLUMN_HEADER"
const initialColumns ={
  columns : [
    { title: '', field: 'image_url' },
    { title: 'Name', field: 'name' },
    { title: 'Abv', field: 'abv' },
    { title: 'Brewed', field: 'brewed' },
    { title: 'Add Cart', field: 'cart'}
  ]
}
export function setColumns(columns){
  return {
    type:COLUMN_HEADER,
    columns
  }
}
export default function ColumnsReducer (state = initialColumns, action){
  if(action.type === undefined) {
    return {
      ...state
    }
  }
  if (action.type === COLUMN_HEADER) {
    return {
      ...state, data:action.data
    }
  }
  return state
}