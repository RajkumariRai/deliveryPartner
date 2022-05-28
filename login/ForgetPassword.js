
import React,{useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function ForgetPassword(props) {

  const {navigation  } = props;
  console.log("props ==> ", navigation)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView >
    <View style={styles.container}>
 
     <Image style={styles.image} source={require("../assets/Logo.png")} />


    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

   

 

    <TouchableOpacity style={styles.loginBtn}
    onPress = {()=>{console.log("I ma here ")}}>
      <Text style={styles.loginText}>Reset Password</Text>
    </TouchableOpacity> 
    <TouchableOpacity onPress={() =>{
 navigation.goBack()
    }}>
      <Text style={styles.forgot_button}>Login?</Text>
    </TouchableOpacity>
  </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginTop: 40,
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#FF1493",
  },
});







