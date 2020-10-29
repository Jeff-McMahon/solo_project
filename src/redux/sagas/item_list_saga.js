import { put, takeLatest } from "redux-saga/effects";
import Axios from "axios";

function* getItemListSaga(action) {
  console.log("in getItemListSaga");
  const response = yield Axios.get("/item/");
  const actionToDispatch = {
    type: "SET_ITEMS",
    payload: response.data,
  };
  yield put(actionToDispatch);
  console.log("after getItemListSaga", response.data);
}


function* itemSaga() {
    yield takeLatest('FETCH_ITEMS', getItemListSaga);
  }
  
  export default itemSaga;
