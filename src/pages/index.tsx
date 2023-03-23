import React from 'react';
import Login from '../components/Modal/Login';
import { NavigationMenu } from '../components/Modal/NavigationMenu';
export default function Home() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '100px auto',
        }}
      >
        <Login />
        <NavigationMenu />
      </div>
    </>
  );
}
