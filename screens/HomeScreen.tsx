import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import StyleGuide from '../constants/StyleGuide'
import { user, icons, categories, products } from '../data'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [activeCategory, setCategory] = useState(0)
  return (
    <SafeAreaView >
        <ScrollView style={{ padding: 16 }}>
          <View style={StyleGuide.rowCenter}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={user.image} />
              <Text style={[StyleGuide.semiText, { fontSize: 20, alignSelf: 'center' }]}> Hi, {user.name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Image style={StyleGuide.iconsImage} source={icons.search} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <Image style={StyleGuide.iconsImage} source={icons.shopping} />
                <View style={{ backgroundColor: StyleGuide.colors.primary, borderRadius: 20, height: 16, width: 16, position: 'absolute', right: -4 }}>
                  <Text style={{ color: StyleGuide.colors.onPrimary, marginLeft: 4, fontSize: 12 }}>1</Text>
                </View>
              </TouchableOpacity>
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
                  onPress={() => setCategory(index)}
                >
                  <Text style={[StyleGuide.regularText, { color: activeCategory === index ? StyleGuide.colors.onPrimary : StyleGuide.colors.darkText }]}>{value.name}</Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
          <View style={[StyleGuide.rowCenter, { paddingHorizontal: 8, marginTop: 10 }]}>
            <TouchableOpacity>
              <Text style={StyleGuide.boldText}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={StyleGuide.regularText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingBottom: hp(4)
            }}
          >
            {
              products.map((product) => (
                <TouchableOpacity
                onPress={()=> navigation.navigate('Product', {
                  item: product
                })}
                  style={{
                    width: wp(44)
                  }}
                  key={product.id}>

                  <Image
                    style={{
                      height: hp(28),
                      width: wp(44),
                      borderRadius: 16,
                    }}
                    source={product.image} />
                  <View style={{ paddingLeft: wp(2) }}>
                    <Text numberOfLines={1} style={StyleGuide.boldText}>{product.name}</Text>
                    <View style={StyleGuide.row}>
                      <Text style={[StyleGuide.semiText, { color: StyleGuide.colors.gray }]}>$ {product.price}</Text>
                      <View style={{ alignSelf: 'center', marginHorizontal: 10, height: 6, width: 6, borderRadius: 20, backgroundColor: StyleGuide.colors.gray }} />
                      <Text style={[StyleGuide.regularText, { color: StyleGuide.colors.gray }]}>{product.brand}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            }
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default HomeScreen