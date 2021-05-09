import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import Profile from './components/Profile';
import BottomBar from './components/BottomBar';
import VerifyButton from './components/VerifyButton';
import CameraButton from './components/CameraButton';
import ProfileMenu from './components/ProfileMenu';
import NewPostMenu from './components/NewPostMenu';
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
      <Profile blank={true} />
      <BottomBar blank={true} />
      <VerifyButton blank={false} centered={true} />
      <CameraButton blank={false} centered={true} />
      <ProfileMenu blank={true} centered={false} />
      <NewPostMenu blank={true} centered={false} />
      <FilterButton blank={true} centered={true}>Gluten Free</FilterButton>
      <TextBox blank={false} centered={true} />
      <BottomSubmit blank={false} centered={true} />
      <CardCreation />
      <Title blank={true} centered={true}>What{"\n"}Today</Title>
      <Title blank={true} centered={true}>Sign Up</Title>
      <Category>PIZZAS</Category>
      <Slider />
      <NewPostSearch blank={true} centered={true} />
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
