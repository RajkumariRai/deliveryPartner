import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {HelperText} from 'react-native-paper';

import {blankValidator, emailValidator, showMessage} from '../utils/Validation';

export default function LoginScreen(props) {
  console.log('props ==> ', navigation);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('false');
  const [password, setPassword] = useState('');
  const [passwordError, setpasswordError] = useState('false');
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
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/Logo.png')} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username or Email"
          placeholderTextColor="#000"
          onChangeText={value => {
            setEmail(value);
            setEmailError(false);
          }}
        />
      </View>
      <View>
        {emailError && (
          <HelperText type="error" visible={emailError}>
            Please Enter Valid Email Id
          </HelperText>
        )}
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry={passwordVisible}
          // right={
          //   <TextInput.icon
          //     name={passwordVisible ? 'eye' : 'eye-off'}
          //     onPress={() => setPasswordVisible(!passwordVisible)}
          //   />
          // }
          onChangeText={password => {
            setPassword(password);
            setpasswordError(false);
          }}
        />
      </View>
      <View>
        {passwordError && (
          <HelperText type="error" visible={passwordError}>
            Please Enter Valid Passwoad
          </HelperText>
        )}
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.push('forgetPassword');
          }}>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
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
        <Text style={styles.signupText}> Do not have an account yet?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.push('signup');
          }}>
          <Text style={styles.signupBtn}>SIGNUP</Text>
        </TouchableOpacity>
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
    marginTop: 40,
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#fff',
    width: '80%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    height: 50,
    width: '100%',
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 30,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#2EE59D',
  },
  signupText: {
    padding: 10,
  },
  signupBtn: {
    width: '80%',
    color: '#000',
    height: 40,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    padding: 10,
  },
  textDanger: {
    color: '#dc3545',
    marginBottom: 10,
  },
});
