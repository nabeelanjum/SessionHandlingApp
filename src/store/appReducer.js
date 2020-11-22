import { LOGIN, LOGIN_SUCCESS, LOGOUT } from "./actionTypes"

const initialState = {
  user: {},
  isLoggedIn: false
}

export default appReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
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