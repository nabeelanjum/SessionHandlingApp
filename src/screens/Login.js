import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import FacebookLoginButton from '../components/FacebookLoginButton';
import { normalizeY } from '../utils/functions';

const fbLogo = require('../assets/images/fbLogo.png');

const loginWithFB = async () => {
  try {
    result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (!result.isCancelled) {
      const accessData = await AccessToken.getCurrentAccessToken();
      console.log('ACCESS DATA:', accessData);
      getInfoFromToken(accessData.accessToken);
    }
  } catch (e) {
    console.log('ERROE IN FB LOGIN:', e);
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
      } else {
        console.log('result:', userInfo);
      }
    },
  );
  new GraphRequestManager().addRequest(profileRequest).start();
};

const Login = () => {
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
    alignItems: 'center',
  },
  fbLogoImg: {
    marginTop: normalizeY(30),
    width: '100%',
    height: normalizeY(100),
    resizeMode: 'contain',
  }
})

export default Login;