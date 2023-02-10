/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StyleGuide from './constants/StyleGuide';



function App() {
  return (
    <SafeAreaView >
     <Text style={StyleGuide.boldText}>HI</Text>
    </SafeAreaView>
  );
}

export default App;
