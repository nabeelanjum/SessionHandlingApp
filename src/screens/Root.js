import React from 'react';
import { useSelector } from 'react-redux';
import Profile from './Profile';
import Login from './Login';
import { Loader } from '../components';

const Root = () => {
  const { isLoggedIn, isLoading } = useSelector((state) => state);

  return (
    <>
      {isLoggedIn ?
        <Profile /> :
        <Login />
      }
      {isLoading && <Loader />}
    </>
  )
}

export default Root;