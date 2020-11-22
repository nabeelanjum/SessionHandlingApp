import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import { LOGOUT } from '../store/actionTypes';
import colors from '../utils/colors';
import { normalizeX } from '../utils/functions';

const Profile = () => {

  const dispatch = useDispatch();

  const { user } = useSelector(state => state);
  const { name } = user;

  const logout = () => {
    dispatch({ type: LOGOUT, payload: {} })
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.nameText}>Hi {name}</Text>
          <Text>You have logged into the app with Facebook, you can tab the button below to Logout</Text>
        </View>
        <Button onPress={logout} title='Logout' style={styles.logoutButton} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalizeX(10)
  },
  body: {
    flex: 1,
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  logoutButton: {
    backgroundColor: colors.RED,
  }
})

export default Profile