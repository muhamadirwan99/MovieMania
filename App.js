import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './Project/About';
import DaftarFilm from './Project/DaftarFilm';
import DaftarTvShow from './Project/DaftarTvShow';
import Detail from './Project/Detail';
import Home from './Project/Home';
import Login from './Project/Login';

export default function App() {
  return (
    <About />
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
