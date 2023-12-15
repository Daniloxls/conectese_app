import { useState } from 'react';
import { View,ScrollView, SafeAreaView, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import { Stack, useNavigation, useRouter } from 'expo-router';
import { ProgressBar,MD3Colors, Provider as PaperProvider } from 'react-native-paper';
import {COLORS, icons, images, SIZES, FONT} from "../../constants"
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../../components";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../../components/common/field/InputField';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Register = () => {
    const router = useRouter();
    const [email, setEmail] = useState("")
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [invalidUsername, setInvalidUsername] = useState(" ")
    const [invalidEmail, setInvalidEmail] = useState(" ")
    const [invalidPassword, setinvalidPassword] = useState(" ")
    const [missmatchPassword, setmissmatchPassword] = useState(" ")
    const handleButtonPress = () =>{
      if(password !== confirmPassword){
         setmissmatchPassword("As duas senhas devem ser iguais")
      }else{
         setmissmatchPassword("")
      }
      if(password.length < 8){
         setinvalidPassword("Sua senha deve conter no minimo 8 caracteres")
      }else{
         setinvalidPassword("")
         
      }
      if(password === confirmPassword){
         if(password.length >= 8){
            
         }
      }
      const formData = {"username": userName, "password": password, "email": email}
      router.push({pathname: '/register/Step1Screen', query : {nome: userName}, data: JSON.stringify(formData)})
    }
         return(
            <>
            <Stack.Screen 
                    options={{headerStyle:{backgroundColor:COLORS.lightBlue},
                    headerShadowVisible: false,
                    headerTitle: ""
                 }}
            />
            <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightBlue , justifyContent: 'center'}}>
                
                
                <ScrollView style={{paddingHorizontal:25}}>
                    <View showVerticalScrollIndicator={false}>
                    </View>
                    
                        <Text style={{fontFamily: FONT.bold,
                                    fontSize: SIZES.xxLarge,
                                    color: COLORS.white,
                                    marginBottom: 10}}>
                            Registro
                        </Text>
                        <View style={{flex: 1, height:10, backgroundColor: COLORS.white, marginBottom: 30}}>
                        </View>
                        <Text style={{fontFamily: FONT.bold,
                                    fontSize: SIZES.xLarge,
                                    color: COLORS.white,
                                    marginBottom: 15}}>
                            Informações de Login
                        </Text>
                    <Text style= {{fontSize: 15, color:COLORS.red}}>{invalidUsername}</Text>
                    <InputField label={'Nome de usuário'} icon={
                        <MaterialIcons name='account-box'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}
                        onChangeText={(text) => setUsername(text)}
                        />
                        
                        }
                     />
                    <Text style= {{fontSize: 15, color:COLORS.red}}>{invalidEmail}</Text>
                     <InputField label={'Email'} icon={
                        <MaterialIcons name='alternate-email'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                        keyboardType={'email-address'}
                        onChangeText={(text) => setEmail(text)}
                     />
                    <Text style= {{fontSize: 15, color:COLORS.red}}>{invalidPassword}</Text>
                     <InputField label={'Senha'} icon={
                        <Ionicons name='ios-lock-closed-outline'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                        inputType={'password'}
                        onChangeText={(text) => setPassword(text)}
    
                     />
                     <Text style= {{fontSize: 15, color:COLORS.red}}>{missmatchPassword}</Text>
                     <InputField label={'Confirme a senha'} icon={
                        <Ionicons name='ios-lock-closed-outline'
                        size ={20}
                        color="#666"
                        style={{marginRight:5, marginTop:3}}/>
                        }
                        inputType={'password'}
                        onChangeText={(text) => setconfirmPassword(text)}
                      />
                     
                     <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end'}}>
                     <View style={{justifyContent: 'center'}}>
                         <Text>Já cadastrado ?</Text>
                         <TouchableOpacity onPress={() => {router.back()}} 
                                                 style={{backgroundColor:COLORS.white,
                                                          padding:20,
                                                          paddingHorizontal:45,
                                                          borderRadius:10,
                                                          marginBottom:30}}>
                            <Text style={{textAlign:'center', fontWeight:'700', fontSize:16, color:COLORS.darkBlue}}> Entre</Text>
                         </TouchableOpacity>
                      </View>
                      <TouchableOpacity onPress={handleButtonPress} 
                                                 style={{backgroundColor:'#0572a7ff',
                                                          flex: 0,
                                                          padding:20,
                                                          paddingHorizontal:45,
                                                          borderRadius:10,
                                                          marginBottom:30}}>
                            <Text style={{textAlign:'center', fontWeight:'700', fontSize:16, color:'#fff'}}> Avançar</Text>
                      </TouchableOpacity>
    
                     </View>
    
                </ScrollView>
                
            </SafeAreaView>
            </>
        )
    
}

export default Register;