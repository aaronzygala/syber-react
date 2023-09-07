/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import SignInPage from './app/SignInPage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './app/HomePage';
import SignUpPage from './app/SignUpPage';

import TabNavigator from './app/TabNavigator';
// const Tab = createBottomTabNavigator();

 export default function App() {
   return (
     <SignInPage/>
    //  <NavigationContainer>
    //   <TabNavigator/>
    // </NavigationContainer>
      //  <NavigationContainer>
      //     <Tab.Navigator initialRouteName="Home"
      //     screenOptions={{
      //       headerShown: false,
      //     }}
      //     >
      //       <Tab.Screen name="Home" component={HomePage} />
      //       <Tab.Screen name="Sign In" component={SignInPage} />
      //       <Tab.Screen name="Sign Up" component={SignUpPage} />
      //     </Tab.Navigator>
      //   </NavigationContainer>
   );
 }