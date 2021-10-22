import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import Columns from "./Reducers/columns";
import Table from "./Reducers/list";
//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

enableES5();

const rootReducer = combineReducers({
  Columns,
  Table
});

// export default rootReducer;
export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield all([
  ]);
}
