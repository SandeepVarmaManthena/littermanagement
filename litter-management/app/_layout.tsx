import React from 'react';
import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import store from './store';
import Toast from 'react-native-toast-message';

export default function Layout() {
  return (
    <Provider store={store}>
      <Slot />
      <Toast />
    </Provider>
  );
}
