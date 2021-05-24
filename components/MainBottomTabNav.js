import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from './icons/homeIcon';
import LargeChef from './icons/largeChef';
import Add from './icons/add';
import ProfileIcon from './icons/profile';
import HomeScreen from '../screens/HomeScreen';
import SaveScreen from '../screens/SaveScreen';
import AddScreen from '../screens/AddScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainBottomTabNav() {
  return (
    <Tab.Navigator initialRouteName="chef" tabBarOptions={{ showLabel: false }}>
      <Tab.Screen name="home" component={HomeScreen} options={{
        tabBarIcon: () => <HomeIcon />
      }} />
      <Tab.Screen name="chef" component={SaveScreen} options={{
        tabBarIcon: () => <LargeChef />
      }} />
      <Tab.Screen name="add" component={AddScreen} options={{
        tabBarIcon: () => <Add />
      }} />
      <Tab.Screen name="profile" component={ProfileScreen} options={{
        tabBarIcon: () => <ProfileIcon />
      }} />
    </Tab.Navigator>
  )
}
