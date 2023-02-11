/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import StyleGuide from './constants/StyleGuide';
import { user, icons, categories } from './data';

function App() {

  const [activeCategory, setCategory] = useState(0)
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
      <ScrollView 
       horizontal
      style={StyleGuide.row}
      showsHorizontalScrollIndicator={false}
      >
        {
          [{ id: 0, name: 'All' }, ...categories].map((value, index) => (
            <TouchableOpacity key={value.id}
              style={{
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderColor: StyleGuide.colors.darkText,
                borderWidth: 1,
                borderRadius: 20,
                marginHorizontal: 5,
                backgroundColor: activeCategory === index ? StyleGuide.colors.primary : null
              }}
              onPress={()=> setCategory(index)}
            >
              <Text style={[StyleGuide.regularText, { color: activeCategory === index ? StyleGuide.colors.onPrimary : StyleGuide.colors.darkText }]}>{value.name}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
