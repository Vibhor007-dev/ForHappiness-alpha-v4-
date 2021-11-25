import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import firebase from 'firebase';
//import {firebaseConfig} from './config';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <DrawerNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

