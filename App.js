import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import MainBottomTabNav from "./components/MainBottomTabNav";
import { ModelProvider } from "./model/WhatTodayModel";

const Stack = createStackNavigator();

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
    <ModelProvider>
      <NavigationContainer>
        <StatusBar></StatusBar>
        <Stack.Navigator initialRouteName="TabNav" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabNav" component={MainBottomTabNav} />
          {/* <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name="screentwo" component={ScreenTwo} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ModelProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


