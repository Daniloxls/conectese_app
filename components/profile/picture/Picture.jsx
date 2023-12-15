import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './picture.style'
import {icons, images} from '../../../constants'

const Picture = () =>{
    return(
        <View style ={styles.container}>
      <View style ={styles.logoBox}>
        <Image
          resizeMode="contain"
          source={images.profile}
          style={styles.logoImage}
          />
      </View>
    </View>
    )

}

export default Picture;