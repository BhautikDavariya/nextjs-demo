import { all, put, takeLatest } from "redux-saga/effects";
import {
  actionTypes,
  failure,
  loginPalyerSuccess,
  ragisterPalyerSuccess,
} from "./actions";
import axios from "axios";

function* registerSaga(action) {
  try {
    const res = yield axios.put(
      "https://pazuru-com-api.stage.norway.everymatrix.com/v1/player/quickRegister",
      action.payload
    );
    const data = yield res;
    yield put(ragisterPalyerSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* loginSaga(action) {
  try {
    const res = yield axios.post(
      "https://pazuru-com-api.stage.norway.everymatrix.com/v1/player/login/player",
      action.payload
    );
    const data = yield res;
    yield put(loginPalyerSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* error() {
  try {
    yield put(failure(null));
  } catch (err) {
    yield put(failure(null));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.RAGISTER_PLAYER, registerSaga),
    takeLatest(actionTypes.LOGIN_PLAYER, loginSaga),
    takeLatest(actionTypes.ERROR, error),
  ]);
}

export default rootSaga;
