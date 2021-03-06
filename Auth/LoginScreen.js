import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {HelperText, TextInput, Button} from 'react-native-paper';
import {button} from '../Components/CommonStyles/Index';
// api
import {getBaseUrl} from '../utils';
import axios from 'axios';
import {showMessage} from '../utils/Validation';

export default function LoginScreen(props) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setpasswordError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const loginHandle = async () => {
    try {
      if (!email) {
        setEmailError(true);
      }
      if (!password || password.length < 8 || password.length > 20) {
        setpasswordError(true);
      }
      if (!email || !password) {
        return;
      }
      let temp = JSON.stringify({
        user_name: email,
        password: password,
      });
      let url = getBaseUrl() + 'deliveryPartner/v1/signin';
      let config = {
        method: 'post',
        url: url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: temp,
      };
      const {data} = await axios(config);
      if (data.success === 1) {
        navigation.push('Dashboard');
      } else {
        showMessage('error', data.message);
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
        <View style={{paddingBottom: 15}}>
          <TextInput
            mode="outlined"
            left={
              <TextInput.Icon
                name="account"
                color={button.commonColor.color}
                size={20}
              />
            }
            style={button.commonTextInput}
            theme={{roundness: 20}}
            placeholder="Username or Email"
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
        <View style={{paddingBottom: 15}}>
          <TextInput
            style={button.commonTextInput}
            left={
              <TextInput.Icon
                name="key-variant"
                color={button.commonColor.color}
                size={20}
              />
            }
            theme={{roundness: 20}}
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
          <Text
            onPress={() => {
              navigation.push('forgetpassword');
            }}
            style={styles.forgot_button}>
            Forgot Password ?
          </Text>
        </View>
        <View>
          <Button
            mode="contained"
            style={button.commonButton}
            onPress={() => {
              loginHandle();
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
            <Text
              style={[button.commonColor, {fontWeight: 'bold', marginLeft: 5}]}>
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
    marginTop: 5,
    color: '#000',
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
