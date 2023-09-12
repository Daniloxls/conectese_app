import { useState } from 'react';
import { View,ScrollView, SafeAreaView, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import { Stack, useRouter } from 'expo-router';

import {COLORS, icons, images, SIZES, FONT} from "../constants"
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/common/field/InputField';

const Login = () => {
    const router = useRouter();
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState(""); // State for password
    const handleLogin = () => {
        // You can access userName and password here and perform any necessary actions
        console.log("Username:", userName);
        console.log("Password:", password);
        // Add your login logic here
        router.push('/home/');
      };
    return(
        <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite , justifyContent: 'center'}}>
            
            <Stack.Screen 
                options={{headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible: false,
                headerTitle: ""
             }}
            />
            <View style={{paddingHorizontal:25}}>
                <View showVerticalScrollIndicator={false}>
                <Image 
                    source={require('../assets/logo_blue.png')}
                    style={ {width: "auto",
                    height: "45%"}}
                    resizeMode='contain'/>
                </View>
                
                    <Text style={{fontFamily: FONT.bold,
                                fontSize: SIZES.large,
                                color: COLORS.primary,
                                marginBottom: 30}}>
                        Login
                    </Text>
                <InputField label={'Nome de usuário'} icon={
                    <MaterialIcons name='account-box'
                    size ={20}
                    color="#666"
                    style={{marginRight:5, marginTop:3}}/>
                    }
                    value={userName} // Pass the userName state as value
                    onChangeText={(text) => setUserName(text)}
                 />
                 <InputField label={'Senha'} icon={
                    <Ionicons name='ios-lock-closed-outline'
                    size ={20}
                    color="#666"
                    style={{marginRight:5, marginTop:3}}/>
                    }
                    inputType={'password'}
                    fieldButtonLabel={'Esqueceu a senha ?'}
                    fieldButtonFuction={() => {}}
                    value={password} // Pass the password state as value
                    onChangeText={(text) => setPassword(text)} // Handle text input changes and update state

                 />
                <TouchableOpacity onPress={handleLogin} 
                                        style={{backgroundColor:'#0572a7ff',
                                                padding:20,
                                                borderRadius:10,
                                                marginBottom:30}}>
                    <Text style={{textAlign:'center', fontWeight:'700', fontSize:16, color:'#fff'}}> Entrar</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
                    <Text>Novo aqui ?</Text>
                    <TouchableOpacity onPress={() => { router.push('/register')}}>
                        <Text style={{color:'#0572a7ff' , fontWeight:700}}> Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    )
}

export default Login;