import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { user, icons } from '../data'
import { SafeAreaView } from 'react-native-safe-area-context';
import StyleGuide from '../constants/StyleGuide';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const ProductScreen = () => {
    const navigation = useNavigation()
    const params = useRoute().params as any;
    console.log("params", params.item);
    
    const [activeColor, setActiveColor] = useState(0)
    const [activeSize, setActiveSize] = useState(0)
    return (
        <SafeAreaView style={{ padding: wp(4) }}>
            <View style={StyleGuide.rowCenter}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{ height: 30, width: 30 }} source={icons.backArrow} />
                </TouchableOpacity>
                <Text style={[StyleGuide.boldText, { fontSize: 18 }]}>Details</Text>
                <Image style={{ height: 30, width: 30 }} source={icons.shopping} />
            </View>
            <Image
                style={{
                    height: hp(50),
                    width: wp(92),
                    borderRadius: 40,
                    marginTop: hp(1),
                    resizeMode: "contain"
                }}
                source={params.item.image} />

            <View style={[StyleGuide.rowCenter, { marginTop: hp(1) }]}>
                <Text style={[StyleGuide.boldText, { fontSize: 30, width: wp(66) }]}>
                    {params.item.name}
                </Text>
                <View style={StyleGuide.row}>
                    {
                        params.item.colors.map((res: any, index: number) => (
                            <TouchableOpacity
                                key={res.id}
                                onPress={() => setActiveColor(index)}
                                style={[{
                                    alignSelf: 'center',
                                    margin: 2,
                                    borderRadius: 20,
                                },
                                activeColor === index && {
                                    borderWidth: 5,
                                    borderColor: StyleGuide.colors.borderWithOpacity
                                }
                                ]}
                            >
                                <View style={{ height: hp(3), width: hp(3), borderRadius: 20, backgroundColor: res.code }} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
            <Text style={[StyleGuide.regularText, { fontSize: 13, }]}>
                {params.item.description}
            </Text>
            <View style={[StyleGuide.row, { marginVertical: hp(1), marginLeft: wp(1) }]}>
                <Image style={{ height: hp(2.5), width: wp(4) }} source={icons.rating} />
                <Text style={[StyleGuide.regularText, { color: StyleGuide.colors.gray, marginLeft: 10 }]}>{params.item.rating}</Text>
                <Text style={[StyleGuide.regularText, { color: StyleGuide.colors.gray, marginLeft: 10 }]}>{params.item.reviews} Reviews</Text>
            </View>
            <View style={StyleGuide.row}>
                {
                    params.item.sizes.map((size: any, index: number) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setActiveSize(index)}
                            style={{
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                borderColor: StyleGuide.colors.darkText,
                                borderWidth: 1,
                                borderRadius: 20,
                                marginHorizontal: 5,
                                backgroundColor: activeSize === index ? StyleGuide.colors.primary : null
                            }}>
                            <Text style={[StyleGuide.semiText,
                            { color: activeSize === index ? StyleGuide.colors.onPrimary : StyleGuide.colors.gray }]}>
                                {size.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View style={StyleGuide.rowCenter}>
                <Text style={[StyleGuide.boldText, { fontSize:32}]}>$ {params.item.price},00</Text>
                <View style={[StyleGuide.row, {backgroundColor: StyleGuide.colors.primary}]}>
                    <Image style={{height: hp(3), width: wp(6)}} source={icons.shopping} />
                    <Text style={[StyleGuide.boldText, { fontSize:24}]}>Add to Bag</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProductScreen