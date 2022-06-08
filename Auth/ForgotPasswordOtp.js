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
      <View style={{padding: 25}}>
        <View style={{marginBottom: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 23, color: '#d60e0e'}}>
            Forget Passwoad
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500',marginTop:10}}>
            An OTP code sent to your email id, Enter it here
          </Text>
        </View>

        <View style={{ }}>
          <TextInput
            mode="outlined"
            style={button.commonTextInput }
            label="Enter OTP"
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
    </View>
  );
}

const styles = StyleSheet.create({
  loginMainView: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});
