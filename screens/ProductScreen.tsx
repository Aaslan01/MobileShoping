import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { user, icons } from '../data'
import { SafeAreaView } from 'react-native-safe-area-context';
import StyleGuide from '../constants/StyleGuide';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const ProductScreen = () => {

    const navigation = useNavigation()
    const params = useRoute().params as any;
    console.log("Test", params.item);
    
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
                        params.item.colors.map((res:any)=>(
                            <View style={{ alignSelf: 'center', marginLeft:10, height: hp(3), width: hp(3), borderRadius: 20, backgroundColor: res.code }} />
                        ))
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProductScreen