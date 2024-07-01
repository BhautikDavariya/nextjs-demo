export const actionTypes = {
  FAILURE: "FAILURE",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  LOAD_DATA: "LOAD_DATA",
  RAGISTER_PLAYER: "RAGISTER_PLAYER",
  LOGIN_PLAYER: "LOGIN_PLAYER",
  RAGISTER_PLAYER_SUCCESS: "RAGISTER_PLAYER_SUCCESS",
  LOGIN_PLAYER_SUCCESS: "LOGIN_PLAYER_SUCCESS",
  LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
  START_CLOCK: "START_CLOCK",
  TICK_CLOCK: "TICK_CLOCK",
  HYDRATE: "HYDRATE",
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function increment() {
  return { type: actionTypes.INCREMENT };
}

export function decrement() {
  return { type: actionTypes.DECREMENT };
}

export function reset() {
  return { type: actionTypes.RESET };
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA };
}

export function loginPalyer(data) {
  return {
    type: actionTypes.LOGIN_PLAYER,
    payload: data,
  };
}

export function ragisterPalyer(data) {
  return {
    type: actionTypes.RAGISTER_PLAYER,
    payload: data,
  };
}

export function ragisterPalyerSuccess(data) {
  return {
    type: actionTypes.RAGISTER_PLAYER_SUCCESS,
    data,
  };
}

export function loginPalyerSuccess(data) {
  return {
    type: actionTypes.LOGIN_PLAYER_SUCCESS,
    data,
  };
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

export function startClock() {
  return { type: actionTypes.START_CLOCK };
}

export function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
}
