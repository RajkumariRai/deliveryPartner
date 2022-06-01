import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {HelperText, TextInput, Button} from 'react-native-paper';
import {button} from '../Components/CommonStyles/Index';

let error = false;
const validateData = () => {
  try {
    if (!email || !emailValidator(email)) {
      setEmailError(true);
      error = true;
    }
    if (!error) {
      navigation.push('dashboard');
    }
  } catch (error) {
    console.log('error in validaton', error);
  }
};

export default function ForgetPasswordOtp(props) {
  const {navigation} = props;
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.loginMainView}>
     
        <View>
          <View style={{fontWeight: 'bold', fontSize: '35', color: '#fff'}}>
            <Text>Forget Passwoad</Text>
          </View>
          <View style={{fontSize: '12', fontWeight: '500'}}>
            <Text>An OTP code sent to your email id, Enter it here </Text>
          </View>
        </View>
        <View>
          <TextInput
            mode="outlined"
            style={button.commonTextInput}
            label="OTP"
            onChangeText={value => {
              setOtp(value);
            }}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button
            mode="contained"
            style={button.commonButton}
            onPress={() => {
              navigation.push('Login');
            }}>
            Send
          </Button>
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  loginMainView: {
    flex: 1,
    justifyContent: "center",
    
  },
  image: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});
