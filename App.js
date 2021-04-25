import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Profile />
      <NavBar />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
});
