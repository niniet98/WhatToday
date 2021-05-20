import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import Settings from "./components/icons/settings";
import Chef from "./components/icons/chef";
import Add from "./components/icons/add";
import ProfileIcon from "./components/icons/profile";
import AddScreen from "./screens/AddScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="screentwo" component={ScreenTwo} />
      </Stack.Navigator> */}
      <Tab.Navigator initialRouteName="chef" tabBarOptions={{ showLabel: false }}>
        <Tab.Screen name="settings" component={SettingsScreen} options={{
          tabBarIcon: () => <Settings />
        }} />
        <Tab.Screen name="chef" component={HomeScreen} options={{
          tabBarIcon: () => <Chef />
        }} />
        <Tab.Screen name="add" component={AddScreen} options={{
          tabBarIcon: () => <Add />
        }} />
        <Tab.Screen name="profile" component={ProfileScreen} options={{
          tabBarIcon: () => <ProfileIcon />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


