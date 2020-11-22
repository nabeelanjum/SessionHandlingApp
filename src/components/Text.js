import React from 'react';
import {
  StyleSheet,
  Text as RNText,
} from 'react-native';
import colors from '../utils/colors';
import { isAndroid } from '../utils/constants';
import { normalizeFont } from '../utils/functions';

const Text = (props) => {
  const { center, right, style, bold, size, bolder, boldest, color, children } = props;
  return (
    <RNText
      {...props}
      allowFontScaling={false}
      style={[
        styles.text,
        center && styles.center,
        right && styles.right,
        bold && styles.bold,
        bolder && styles.bolder,
        boldest && styles.boldest,
        size && { fontSize: normalizeFont(size, true) },
        color && { color },
        style
      ]}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.TEXT,
    fontSize: normalizeFont(12.5),
    fontWeight: '300',
    fontFamily: isAndroid ? 'sans-serif-light' : undefined,
  },
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  },
  bold: {
    fontWeight: 'normal',
    fontFamily: isAndroid ? 'sans-serif' : undefined,
  },
  bolder: {
    fontWeight: '500',
    fontFamily: isAndroid ? 'sans-serif-medium' : undefined,
  },
  boldest: {
    fontWeight: 'bold',
    fontFamily: isAndroid ? 'sans-serif' : undefined,
  }
})

export default Text;