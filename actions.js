export const actionTypes = {
  RAGISTER_PLAYER: "RAGISTER_PLAYER",
  LOGIN_PLAYER: "LOGIN_PLAYER",
  RAGISTER_PLAYER_SUCCESS: "RAGISTER_PLAYER_SUCCESS",
  LOGIN_PLAYER_SUCCESS: "LOGIN_PLAYER_SUCCESS",
  ERROR: "ERROR",
  FAILURE: "FAILURE",
};

export function errorState(error) {
  return {
    type: actionTypes.ERROR,
    error,
  };
}

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
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
