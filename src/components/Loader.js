import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import colors from '../utils/colors';

export default Loader = () => (
  <View style={styles.loaderView}>
    <ActivityIndicator size={'large'} color={colors.WHITE} />
  </View>
)

const styles = StyleSheet.create({
  loaderView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
})