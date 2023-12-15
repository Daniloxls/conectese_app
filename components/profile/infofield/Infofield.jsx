import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './infofield.style'
import {icons, images} from '../../../constants'

const Infofield = () =>{
    return(
        <View>
            <Text style={styles.userName}>Danilo Lacerda Silva</Text>
        </View>
    )

}

export default Infofield;