import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomBar from './components/BottomBar';
import Profile from './components/Profile';
import Prova from './components/Prova';
import FilterButton from './components/FilterButton';
import TextBox from './components/TextField';
import BottomSubmit from './components/ButtonSubmit';
import CardCreation from './components/Cards';
import Title from './components/Title';
import Category from './components/Category';
import Slider from './components/Slider';
import NewPostSearch from './components/NewPostSearch';
import Post from './components/Post';
import Checkbox from './components/Checkbox';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf")
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <FilterButton />
      <TextBox />
      <BottomSubmit />
      <CardCreation />
      <Title>What{"\n"}Today</Title>
      <Title>Sign Up</Title>
      <Category>PIZZAS</Category>
      <Slider />
      <NewPostSearch />
      <Post />
      <Checkbox>Keep logged in</Checkbox>
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
