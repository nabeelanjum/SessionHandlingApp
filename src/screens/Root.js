import React from 'react';
import { useSelector } from 'react-redux';
import Profile from './Profile';
import Login from './Login';

const Root = () => {
  const { isLoggedIn } = useSelector((state) => state);

  return (
    <>
      {isLoggedIn ?
        <Profile /> :
        <Login />
      }
    </>
  )
}

export default Root;