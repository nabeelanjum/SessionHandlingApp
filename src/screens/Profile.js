import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text } from '../components';
import { LOGOUT } from '../store/actionTypes';
import colors from '../utils/colors';
import { normalizeFont, normalizeX, normalizeY } from '../utils/functions';

const Profile = () => {

  const dispatch = useDispatch();

  const { user } = useSelector(state => state);
  const { name } = user;

  const logout = () => {
    dispatch({ type: LOGOUT });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.nameText}>Hi {name}</Text>
          <Text>You have logged into the app with Facebook, you can tap the button below to Logout</Text>
        </View>
        <Button onPress={logout} title='Logout' style={styles.logoutButton} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalizeX(12)
  },
  body: {
    flex: 1,
  },
  nameText: {
    fontSize: normalizeFont(26, true),
    fontWeight: 'bold'
  },
  logoutButton: {
    backgroundColor: colors.RED,
  }
})

export default Profile