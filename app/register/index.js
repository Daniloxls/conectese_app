import { useState } from 'react';
import { View,ScrollView, SafeAreaView, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import { Stack, useRouter } from 'expo-router';

import {COLORS, icons, images, SIZES, FONT} from "../../constants"
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../../components";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../../components/common/field/InputField';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Register = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")
    return(
        <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite , justifyContent: 'center'}}>
            
            <Stack.Screen 
                options={{headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible: false,
                headerTitle: ""
             }}
            />
            <ScrollView style={{paddingHorizontal:25}}>
                <View showVerticalScrollIndicator={false}>
                </View>
                
                    <Text style={{fontFamily: FONT.bold,
                                fontSize: SIZES.large,
                                color: COLORS.primary,
                                marginBottom: 30}}>
                        Cadastrar
                    </Text>
                <InputField label={'Nome Completo'} icon={
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
                <InputField label={'Nome de usuário'} icon={
                    <MaterialIcons name='account-box'
                    size ={20}
                    color="#666"
                    style={{marginRight:5, marginTop:3}}/>
                    }
                 />
                 <InputField label={'Email'} icon={
                    <MaterialIcons name='alternate-email'
                    size ={20}
                    color="#666"
                    style={{marginRight:5, marginTop:3}}/>
                    }
                    keyboardType={'email-address'}
                 />
                 <InputField label={'Tags'} icon={
                    <Ionicons name='pricetag-outline'
                    size ={20}
                    color="#666"
                    style={{marginRight:5, marginTop:3}}/>
                    }
                 />
                 
                 <InputField label={'Senha'} icon={
                    <Ionicons name='ios-lock-closed-outline'
                    size ={20}
                    color="#666"
                    style={{marginRight:5, marginTop:3}}/>
                    }
                    inputType={'password'}

                 />
                 <InputField label={'Confirme a senha'} icon={
                    <Ionicons name='ios-lock-closed-outline'
                    size ={20}
                    color="#666"
                    style={{marginRight:5, marginTop:3}}/>
                    }
                    inputType={'password'}

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
                 />
                <TouchableOpacity onPress={() => {router.push('/home/')}} 
                                        style={{backgroundColor:'#0572a7ff',
                                                padding:20,
                                                borderRadius:10,
                                                marginBottom:30}}>
                    <Text style={{textAlign:'center', fontWeight:'700', fontSize:16, color:'#fff'}}> Cadastrar</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
                    <Text>Já cadastrado ?</Text>
                    <TouchableOpacity onPress={() => {router.push('/')}}>
                        <Text style={{color:'#0572a7ff' , fontWeight:700}}> Entre</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Register;