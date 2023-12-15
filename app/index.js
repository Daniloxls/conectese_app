import { useState } from 'react';
import { View,ScrollView, SafeAreaView, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import { Stack, useRouter } from 'expo-router';

import {COLORS, icons, images, SIZES, FONT} from "../constants"
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/common/field/InputField';
import axios from 'axios';


const Login = () => {
    const router = useRouter();
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState(""); // State for password
    const handleLogin = async () => {
      try {
        const response = await axios.post(
          'http://192.168.0.7:8080/api/auth/signin/professional',
          {
            username: username,
            password: password,
          },
          {
            headers: {
              'Content-Type': 'application/json', // Ensure the content type is set to JSON
            },
          }
        );
    
        if (response.status === 200) {
          // Successful login
          const responseData = response.data;
          console.log(responseData); // Log the success message
          router.push('/home');
          // You can also store the token in a secure way if needed
          const token = responseData.token;
          // Do something with the token, like storing it in localStorage or a secure cookie
        } else {
          // Invalid credentials or other error
          console.log(response.data.message); // Log the error message
        }
      } catch (error) {
        console.error('Error:', error.response.data.message);
      }
    };
    return(
        <SafeAreaView style={{ flex:1, backgroundColor: COLORS.darkBlue , justifyContent: 'center'}}>
            
            <Stack.Screen 
                options={{
                headerShown: true,
                headerStyle:{backgroundColor:COLORS.darkBlue},
                headerShadowVisible: false,
                headerTitle: ""
             }}
            />
            <View style={{paddingHorizontal:25}}>
                <View showVerticalScrollIndicator={false}>
                <Image 
                    source={require('../assets/footerLogo.png')}
                    style={ {width: "auto",
                    height: "45%"}}
                    resizeMode='contain'/>
                </View>
                
                    <Text style={{fontFamily: FONT.bold,
                                fontSize: SIZES.large,
                                color: COLORS.white,
                                marginBottom: 30}}>
                        Login
                    </Text>
                <InputField label={'Nome de usuário'} icon={
                    <MaterialIcons name='account-box'
                    size ={20}
                    color="#666"
                    style={{marginRight:5, marginTop:3}}/>
                    }
                    backgroundColor={COLORS.white}
                    value={username} // Pass the username state as value
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
                                        style={{backgroundColor:COLORS.white,
                                                padding:20,
                                                borderRadius:10,
                                                marginBottom:30}}>
                    <Text style={{textAlign:'center', fontWeight:'700', fontSize:16, color:COLORS.darkBlue}}> Entrar</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
                    <Text style={{color:COLORS.white}}>Novo aqui ?</Text>
                    <TouchableOpacity onPress={() => { router.push('/register')}}>
                        <Text style={{color:COLORS.lightWhite , fontWeight:700}}> Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    )
}

export default Login;