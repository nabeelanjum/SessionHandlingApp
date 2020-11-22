import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import colors from '../utils/colors';
import { normalizeY } from '../utils/functions';
import Text from './Text';

const Button = ({ onPress, style, titleStyle, title }) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text bolder size={13} style={[styles.title, titleStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: normalizeY(42) > 60 ? 60 : normalizeY(42),
    backgroundColor: colors.THEME,
    borderRadius: 50,
  },
  title: {
    color: 'white',
  },
})

export default Button;