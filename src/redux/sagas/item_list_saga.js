import { put, takeLatest } from "redux-saga/effects";
import Axios from "axios";

function* addSaga(action) {
  console.log('in addSaga')
  try {
    const response = yield Axios.post("/item/add", action.payload)
    yield put({ type: "FETCH_ITEMS" })
  } catch (err) { console.log('error adding item', err) }
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

function* editSaga(action) {
  console.log('in editsaga', action.payload);
  try {
    const response = yield Axios.put(`/item/${action.payload}`
    );
    yield put({ type: "FETCH_ITEMS" });
  } catch(err) {
    console.log('error adding item', err)
  }
}

function* itemSaga() {
  yield takeLatest('FETCH_ITEMS', getItemListSaga);
  yield takeLatest('LOOSE_ITEMS', deleteSaga);
  yield takeLatest('ADD_ITEM', addSaga);
  yield takeLatest('EDIT_ITEM', editSaga);
}

export default itemSaga;
