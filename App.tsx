/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>{
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}

export default App;
