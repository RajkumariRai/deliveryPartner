import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
  } from "react-native";

export const SplashScreen = (props) => {
    const {navigation  } = props;
   
    setTimeout(() =>{navigation.push('Login')},1000)

  return (
   <SafeAreaView >
    <View style={styles.container}>
 
     <Image style={styles.image} source={require("../assets/Logo.png")} />
</View>
</SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#2EE59D",
      alignItems: "center",
      justifyContent: "center",
      height:"100%"
    },
   
    image: {
      marginTop: 40,
      marginBottom: 40,
    }

})