import { LOGIN, LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESS, LOGOUT } from "./actionTypes"

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
}

export default appReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        isLoading: true
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isLoading: false,
      }

    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false
      }

    case LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      }

    default:
      return {
        ...state
      }
  }
}