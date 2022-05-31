import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import { button } from '../Components/CommonStyles/Index';

import {emailValidator, showMessage} from '../utils/Validation';

export default function LoginScreen(props) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setpasswordError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  let error = false;
  const validateData = () => {
    try {
      if (!email || !emailValidator(email)) {
        setEmailError(true);
        error = true;
      }
      if (!password || password.length < 8 || password.length > 20) {
        setpasswordError(true);
        error = true;
      }
      if (!error) {
        navigation.push('dashboard');
      }
    } catch (error) {
      console.log('error in validaton', error);
    }
  };

  return (
    <View >
      <Image style={styles.image} source={require('../assets/Logo.png')} />

      <View >
        <TextInput
         mode="outlined"
          left={<TextInput.Icon name="account" />}
          style={button.commonTextInput}
          placeholder="Username or Email"
          placeholderTextColor="#000"
          onChangeText={value => {
            setEmail(value.trim());
            setEmailError(false);
          }}
        />
      </View>
      <View>
        {emailError && (
          <HelperText type="error" visible={emailError} style={{ textAlign:'center'}}>
            Please Enter Valid Email Id
          </HelperText>
        )}
      </View>

      <View >
        <TextInput
         style={button.commonTextInput}
          left={<TextInput.Icon name="lock" />}
          mode="outlined"
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry={passwordVisible}
          right={
            <TextInput.Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
          onChangeText={password => {
            setPassword(password);
            setpasswordError(false);
          }}
        />
  
      </View>
      <View>
        {passwordError && (
          <HelperText type="error" visible={passwordError} style={{ textAlign:'center'}}>
            Please Enter Valid Passwoad
          </HelperText>
        )}
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.push('forgetpassword');
          }}>
          <Text style={styles.forgot_button}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          validateData();
        }}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View>
        <View>
          <Text style={{fontSize: 14, color: '#9a9a9a', marginTop: 45, textAlign:'center',}}>
            Do not have an account yet?
          </Text>
          <TouchableOpacity onPress={() => navigation.push('signup')}>
            <Text style={{color: '#26ae61', textAlign: 'center'}}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  image: {
    marginTop: 80,
    marginBottom: 40,
    marginLeft: 40,
    marginRight:40,
    alignItems:'center',
    justifyContent: 'center',
  },

  inputView: {
    backgroundColor: '#fff',
    width: '80%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  // TextInput: {
  //   borderRadius: 10,
  //   height: 50,
  //   width: '100%',
  //   flex: 1,
  //   padding: 10,
  //   marginLeft: 20,
  // },

  forgot_button: {
    flexDirection: 'column',
   textAlign:'center',
    justifyContent: 'space-between',
    height: 30,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginLeft:40,
    backgroundColor: '#2EE59D',
  },
  signupText: {
    marginTop: 10,
    textAlign:'center',
  },
  signupBtn: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: '#26ae61',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textDanger: {
    color: '#dc3545',
    marginBottom: 10,
  },
});
