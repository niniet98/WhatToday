import { useFonts } from 'expo-font';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

import { NavigationContainer } from "@react-navigation/native";
/* import { createStackNavigator } from "@react-navigation/stack"; */

import HomeScreen from './screens/HomeScreen';
import ScreenTwo from './screens/ScreenTwo';

/* const Stack = createStackNavigator(); */

export default function App() {
  /* const [fontsLoaded] = useFonts({
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
  } */

  return (
    <NavigationContainer>
      <View style={styles.conatiner}>
        <Text>asdfghjkl</Text>
      </View>
      {/* <Stack.Navigatior>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="screentwo" component={ScreenTwo} />
      </Stack.Navigatior> */}
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})