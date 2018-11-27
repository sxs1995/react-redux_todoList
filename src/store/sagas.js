import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import axios from "axios";
import { initLsitAction } from "./actionCreators";

function* getInitList() {
  try {
    const res = yield axios.get("/list");
    const action = initLsitAction(res.data);
    yield put(action);
  } catch (e) {
    console.log("失败");
  }
}

// generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
