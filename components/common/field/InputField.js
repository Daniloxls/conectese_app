 import { View, Text, TouchableOpacity, TextInput} from 'react-native'
 import React, {useState} from 'react'
 import {COLORS, icons, images, SIZES, FONT} from "../../../constants"
 
 export default function InputField({ label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction,value, onChangeText  }) {
    const [inputValue, setInputValue] = useState(''); // Initialize the state with an empty string
  
    const handleInputChange = (text) => {
      setInputValue(text); // Update the inputValue state when the text input changes
    };
  
    return (
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 3,
          paddingRight: 3,
          borderRadius: 10,
          marginBottom: 15,
          backgroundColor: COLORS.white 
          
        }}
      >
        {icon}
        {inputType === 'password' ? (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            style={{ flex: 1, paddingVertical: 0}}
            secureTextEntry={true}
            value={value} // Pass the 'value' prop here
            onChangeText={onChangeText} 
          />
        ) : (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            secureTextEntry={false}
            style={{ flex: 1, paddingVertical: 0 }}
            value={value} // Pass the 'value' prop here
            onChangeText={onChangeText} 
          />
        )}
        <TouchableOpacity onPress={() => fieldButtonFunction(inputValue)} style={{marginTop: 3, marginRight: 6}}>
          <Text style={{ color: '#075fa6', fontWeight: 700 }}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  