import { put, takeLatest } from "redux-saga/effects";
import Axios from "axios";

function* addSaga(action) {
console.log('in addSaga', action.payload);
}

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

function* deleteSaga(action) {
  console.log('in deleteSaga', action.payload);
  try {
    const response = yield Axios.delete(`/item/delete/${action.payload}`)
  } catch (err) { console.log("error ", err) }

  const actionToDispatch = {
    type: "FETCH_ITEMS",
  };
  yield put(actionToDispatch);
  console.log('after deleteSaga')
}

function* itemSaga() {
  yield takeLatest('FETCH_ITEMS', getItemListSaga);
  yield takeLatest('LOOSE_ITEMS', deleteSaga);
  yield takeLatest('ADD_ITEMS', addSaga);
}

export default itemSaga;
