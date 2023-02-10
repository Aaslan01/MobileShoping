/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StyleGuide from './constants/StyleGuide';
import { user, icons } from './data';

function App() {
  return (
    <SafeAreaView style={{ padding: 16 }}>
      <View style={StyleGuide.rowCenter}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={user.image} />
          <Text style={[StyleGuide.semiText, { fontSize: 20, alignSelf: 'center' }]}> Hi, {user.name}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image style={StyleGuide.iconsImage} source={icons.search} />
          <Image style={StyleGuide.iconsImage} source={icons.shopping} />
        </View>
      </View>
      <Text style={[StyleGuide.boldText, { fontSize: 36, paddingVertical: 30 }]}> Explore the Best
        <Text style={{ color: StyleGuide.colors.primary }}>{' '}Collections{' '}</Text>
        for you.
      </Text>
      <Text style={[StyleGuide.boldText, { fontSize: 16 }]}>
        Categories
      </Text>
    </SafeAreaView>
  );
}

export default App;
