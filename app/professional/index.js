import { useState } from 'react';
import { View,ScrollView, SafeAreaView, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import { Stack, useRouter } from 'expo-router';

import {COLORS, icons, images, SIZES, FONT} from "../../constants"
import {Picture, Infofield} from "../../components";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../../components/common/field/InputField';
import axios from 'axios';


const professionalProfile = ()=>{
    return(
        <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible: false,
                headerTitle: ""
             }}
            />
            <ScrollView showVerticalScrollIndicator={false}>
                <View 
                style={{
                     flex:1,
                     padding:SIZES.medium}}
                >
                    <Picture></Picture>
                    <Infofield></Infofield>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default professionalProfile;