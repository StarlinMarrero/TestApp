import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './src/components/Layout';
import Login from './src/Screens/accounts/Login';
import Home from './src/Screens/Home';
import Images from './src/Screens/Images';
import Users from './src/Screens/Users';
import AuthMiddleware from './src/Screens/accounts/AuthMiddleware';


export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>

      <Stack.Navigator>



        <Stack.Screen name="Auth" options={{headerShown: false}} component={AuthMiddleware} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Home" options={{ title: "Devprosoft", headerTitleAlign: "center" }} component={Home} />
        <Stack.Screen name="Images" component={Images} />
        <Stack.Screen name="Users" component={Users} />

      </Stack.Navigator>

    </NavigationContainer>
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
