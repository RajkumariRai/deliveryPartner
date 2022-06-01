import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {HelperText, TextInput, Button} from 'react-native-paper';
import {button} from '../Components/CommonStyles/Index';

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
      if (!email) {
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
    <View style={styles.loginMainView}>
      <View style={styles.image}>
        <Image source={require('../assets/Logo.png')} />
      </View>
      <View style={styles.formSectionPadding}>
        <View>
          <TextInput
            mode="outlined"
            left={<TextInput.Icon name="account" />}
            style={button.commonTextInput}
            label="Username or Email"
            placeholderTextColor="#000"
            onChangeText={value => {
              setEmail(value.trim());
              setEmailError(false);
            }}
          />
          {emailError && (
            <HelperText
              type="error"
              visible={emailError}
              style={{textAlign: 'center'}}>
              Please Enter User name or Email Id
            </HelperText>
          )}
        </View>
        <View>
          <TextInput
            style={button.commonTextInput}
            left={<TextInput.Icon name="lock"  />}
            mode="outlined"
            label="Password"
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
          {passwordError && (
            <HelperText
              type="error"
              visible={passwordError}
              style={{textAlign: 'center'}}>
              Please Enter Valid Passwoad
            </HelperText>
          )}
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.push('forgetpasswordotp');
            }}>
            <Text style={styles.forgot_button}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Button
            mode="contained"
            style={button.commonButton}
            onPress={() => {
              validateData();
            }}>
            LOGIN
          </Button>
        </View>
        <View
          style={{flexDirection: 'row', textAlign: 'center', marginTop: 45}}>
          <Text
            style={{
              fontSize: 14,
              color: '#9a9a9a',
              marginLeft: 20,
              fontWeight: '700',
            }}>
            Do not have an account yet?
          </Text>
          <TouchableOpacity onPress={() => navigation.push('signup')}>
            <Text style={{color: '#d60e0e', fontWeight: 'bold', marginLeft: 5}}>
              SIGNUP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forgot_button: {
    textAlign: 'right',
    height: 30,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  loginMainView: {
    flex: 1,
    justifyContent: 'center',
    flexGrow: 1,
  },
  image: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  formSectionPadding: {
    padding: 15,
  },
});
