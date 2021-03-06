import React from 'react';
import {
  Pressable,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import Text from './Text';
import { normalizeFont, normalizeY } from '../utils/functions';
import colors from '../utils/colors';
import { SCREEN_HEIGHT } from '../utils/constants';

const fbIcon = require('../assets/images/fbLogo.png');

const FacebookLoginButton = ({ onPress }) => (
  <Pressable style={styles.loginBtn} onPress={onPress}>
    <Image source={fbIcon} style={styles.fbIcon} />
    <Text bold style={styles.loginBtnText}>Login with Facebook</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  loginBtn: {
    flexDirection: 'row',
    marginTop: SCREEN_HEIGHT / 4,
    width: '100%',
    height: normalizeY(42) > 55 ? 55 : normalizeY(42),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.FACEBOOK,
  },
  loginBtnText: {
    color: colors.WHITE,
    fontSize: normalizeFont(12.5)
  },
  fbIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    // backgroundColor: 'red'
  }
})

export default FacebookLoginButton;