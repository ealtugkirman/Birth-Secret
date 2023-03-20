import React from 'react'
import {View, Text, SafeAreaView, Image} from 'react-native';
import styles from './Welcome.style'
import Logo from '../../../assets/img/Logo.png'

function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
        <View style= {styles.view}>
        <Text style={styles.text}>
            Birth {"\n"}
            Secret
        </Text>
        </View>
        <Image style={styles.image} source={Logo} />
        <Text style={styles.lib}>Created by ealtugk at Hacettepe Library</Text>
    </SafeAreaView>
  )
}

export default Welcome