import axios from "axios"

const GET_BEER_LIST = 'GET_BEER_LIST'
const GET_BEER_LIST_FAIL = 'GET_BEER_LIST_FAIL'
// export function getBeerList () {
//   return async (dispatch) => {
//     const result = await axios.get("https://api.punkapi.com/v2/beers")
//     dispatch({type:GET_BEER_LIST, result})
//   }
// }
export function getBeerList (data){
  return {
    type: GET_BEER_LIST,
    data
  }
}
export function getBeerListFail (error) {
  return{
    type: GET_BEER_LIST_FAIL,
    error
  }
}
const initialData = {
  data : [],
  error: null
}

export function getBeerListThunk(){
  return async (dispatch, getState)=>{
    try{
      const result = await axios.get("https://api.punkapi.com/v2/beers")
      dispatch(getBeerList(result.data))
      console.log(result.data)
    }catch(error){
      dispatch(getBeerListFail(error))
    }
  }
}

export default function TableReducer(state = initialData, action) {
  if (action.type === GET_BEER_LIST) { 
    return {...state, data: action.data , error:null}
  }
  if (action.type === GET_BEER_LIST_FAIL) {
    return {...state, error:action.error}
  }
  return state
}


