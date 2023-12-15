import { useState } from 'react';
import { View,ScrollView, SafeAreaView, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import { Stack, useLocalSearchParams, useNavigation, useRouter } from 'expo-router';

import {COLORS, icons, images, SIZES, FONT} from "../../constants"
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../../components";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../../components/common/field/InputField';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

{/* <InputField label={'Nome Completo'} icon={
                        <Ionicons name='person-outline'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                     }
                     />
                     <InputField label={'Telefone para contato'} icon={
                        <Ionicons name='call-outline'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                        keyboardType={'number-pad'}
                     />
                     <InputField label={'CPF'} icon={
                        <AntDesign name='idcard'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                        keyboardType={'number-pad'}
                     />
                     <InputField label={'Tags'} icon={
                        <Ionicons name='pricetag-outline'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                     />
                     <InputField label={'CEP'} icon={
                        <Ionicons name='compass-outline'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                        keyboardType={'number-pad'}
                     />
                     <InputField label={'Endereço'} icon={
                        <Ionicons name='location-outline'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                     />
                     <InputField label={'Numero'} icon={
                        <MaterialIcons name='tag'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                        keyboardType={'number-pad'}
                     />
                     <InputField label={'Complemento'} icon={
                        <Ionicons name='location-outline'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                     />
                     <InputField label={'Bairro'} icon={
                        <MaterialCommunityIcons name='home-city'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                     />
                     <InputField label={'Cidade'} icon={
                        <MaterialIcons name='location-city'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                     />
                     <InputField label={'Estado'} icon={
                        <Ionicons name='map'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                     />*/}

const Step2Screen = ({formData}) => {
   return (
      <View>
        <Text>Data from the first page:</Text>
        <Text>Username: {formData.username}</Text>
        <Text>Email: {formData.email}</Text>
        <Text>Password: {formData.password}</Text>
        {/* Add more data as needed */}
      </View>
    );
  };

export default Step2Screen;