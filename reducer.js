import { actionTypes } from "./actions";

function reducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };
    case actionTypes.RAGISTER_PLAYER_SUCCESS:
      return {
        ...state,
        ...{ registerPlayer: action.data.data },
      };

    case actionTypes.LOGIN_PLAYER_SUCCESS:
      return {
        ...state,
        ...{ registerPlayer: action.data.data },
      };
    default:
      return state;
  }
}

export default reducer;
