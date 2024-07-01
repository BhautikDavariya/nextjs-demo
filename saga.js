import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import {
  actionTypes,
  failure,
  loadDataSuccess,
  loginPalyerSuccess,
  ragisterPalyerSuccess,
  tickClock,
} from "./actions";
import axios from "axios";

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

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
    const res = yield axios.put(
      "https://pazuru-com-api.stage.norway.everymatrix.com/v1/player/quickRegister",
      action.payload
    );
    const data = yield res;
    yield put(loginPalyerSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.RAGISTER_PLAYER, registerSaga),
    takeLatest(actionTypes.LOGIN_PLAYER, loginSaga),
  ]);
}

export default rootSaga;
