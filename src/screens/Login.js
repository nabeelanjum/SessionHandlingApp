import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import { useDispatch } from 'react-redux';
import FacebookLoginButton from '../components/FacebookLoginButton';
import { LOGIN_SUCCESS } from '../store/actionTypes';
import { normalizeX, normalizeY } from '../utils/functions';

const fbLogo = require('../assets/images/fbLogo.png');

const Login = () => {

  const dispatch = useDispatch();

  const loginWithFB = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (!result.isCancelled) {
        const accessData = await AccessToken.getCurrentAccessToken();
        console.log('ACCESS DATA:', accessData);
        getInfoFromToken(accessData.accessToken);
      }
    } catch (e) {
      console.log('ERROE IN FB LOGIN:', e);
      alert(e.toString());
    }
  }

  const getInfoFromToken = (token) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,email',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      { token, parameters: PROFILE_REQUEST_PARAMS },
      (error, userInfo) => {
        if (error) {
          console.log('login info has error:', error);
          alert(error.toString());
        } else {
          dispatch({ type: LOGIN_SUCCESS, payload: userInfo });
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.fbLogoImg} source={fbLogo} />
      <FacebookLoginButton onPress={loginWithFB} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalizeX(12)
  },
  fbLogoImg: {
    marginTop: normalizeY(30),
    width: '100%',
    height: normalizeY(100),
    resizeMode: 'contain',
  }
})

export default Login;