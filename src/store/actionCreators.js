import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import { LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESS } from "./actionTypes";

export const loginWithFacebook = () => async (dispatch, getState) => {
  dispatch({ type: LOGIN_PENDING });
  try {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (!result.isCancelled) {
      const accessData = await AccessToken.getCurrentAccessToken();
      if (accessData) {
        const token = accessData.accessToken;
        const PROFILE_REQUEST_PARAMS = {
          fields: { string: 'id,name,email' },
        };
        const profileRequest = new GraphRequest('/me', { token, parameters: PROFILE_REQUEST_PARAMS },
          (error, userInfo) => {
            if (error) {
              throw error;
            } else {
              dispatch({ type: LOGIN_SUCCESS, payload: userInfo });
            }
          },
        );
        new GraphRequestManager().addRequest(profileRequest).start();
      } else throw 'Cannot get access token';
    } else {
      dispatch({ type: LOGIN_FAILED });
    }
  } catch (e) {
    console.log('ERROE IN FB LOGIN:', e);
    dispatch({ type: LOGIN_FAILED });
    alert(e.toString());
  }
}