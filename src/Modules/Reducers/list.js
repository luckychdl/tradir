import axios from "axios"

const GET_BEER_LIST = 'GET_BEER_LIST'
const GET_BEER_LIST_FAIL = 'GET_BEER_LIST_FAIL'
const SET_FILTER_DATA = "SET_FILTER_DATA"
const SET_FILTER_CHECKED ="SET_FILTER_CHECKED"
const ADD_CART = "ADD_CART"
const initialData = {
  data : [],
  filterData:[],
  error: null,
  value:[],
  cartList:[]
}
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
export function setFilterData (filterData) {
  return {
    type: SET_FILTER_DATA,
    filterData
  }
}
export function setFilterChecked (value) {
  return {
    type: SET_FILTER_CHECKED,
    value
  }
}
export function addWishList(data){
  return {
    type:ADD_CART,
    data
  }
}
export function getBeerListThunk(){
  return async (dispatch)=>{
    try{
      const result = await axios.get("https://api.punkapi.com/v2/beers")
      dispatch(getBeerList(result.data))
    }catch(error){
      dispatch(getBeerListFail(error))
    }
  }
}

export default function TableReducer(state = initialData, action) {
  if (action.type === GET_BEER_LIST) { 
    return {...state, data: action.data , error: null}
  }
  if (action.type === GET_BEER_LIST_FAIL) {
    return {...state, error:action.error}
  }
  if (action.type === SET_FILTER_DATA) {
    return {...state, filterData:action.filterData, error: null}
  }
  if (action.type === SET_FILTER_CHECKED) {
    return {...state,  value: action.value}
  }
  if (action.type === ADD_CART) {
    return {...state, cartList: [...state.cartList, action.data]}
  }
  return state
}


