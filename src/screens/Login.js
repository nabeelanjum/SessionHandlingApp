import React, { useCallback } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { useDispatch } from 'react-redux';
import FacebookLoginButton from '../components/FacebookLoginButton';
import { loginWithFacebook } from '../store/actionCreators';
import { normalizeX, normalizeY } from '../utils/functions';

const fbLogo = require('../assets/images/fbLogo.png');

const Login = () => {

  const dispatch = useDispatch();

  const login = () => {
    dispatch(loginWithFacebook());
  }

  return (
    <View style={styles.container}>
      <Image style={styles.fbLogoImg} source={fbLogo} />
      <FacebookLoginButton onPress={login} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalizeX(12)
  },
  fbLogoImg: {
    marginTop: normalizeY(32),
    width: '100%',
    height: normalizeY(110),
    resizeMode: 'contain',
  }
})

export default Login;