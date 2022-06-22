import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {HelperText, TextInput, Button} from 'react-native-paper';
import {button} from '../Components/CommonStyles/Index';
import {emailValidator, nameValidation, showMessage} from '../utils/Validation';
// api
import {getBaseUrl} from '../utils';
import axios from 'axios';

export default function SignUp(props) {
  const {navigation} = props;
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const signupHandle = async () => {
    try {
      if (!nameValidation(userName)) {
        setUserNameError(true);
      }
      if (!phoneNumber) {
        setPhoneNumberError(true);
      }
      if (!email || !emailValidator(email)) {
        setEmailError(true);
      }
      if (!password || password.length < 8 || password.length > 20) {
        setPasswordError(true);
      }
      if (!confirmPassword) {
        setConfirmPasswordError(true);
      }
      if (password && confirmPassword && password !== confirmPassword) {
        setConfirmPasswordError(true);
      }
      if (
        !userName ||
        !phoneNumber ||
        !email ||
        !password ||
        !confirmPassword
      ) {
        return;
      }
      let temp = JSON.stringify({
        FullName: userName,
        Email_id: email,
        Contact_No: phoneNumber,
        Password: password,
      });
      let url = getBaseUrl() + 'deliveryPartner/v1/register';
      let config = {
        method: 'post',
        url: url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: temp,
      };
      const {data} = await axios(config);
      console.log('data', data);
      if (data.success === 1) {
        showMessage('success', data.message);
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
            placeholder="Username"
            value={userName}
            onChangeText={value => {
              setUserName(value);
              setUserNameError(false);
            }}
          />
          {userNameError && (
            <HelperText type="error" visible={userNameError}>
              Please Enter Valid User Name
            </HelperText>
          )}
        </View>

        <View style={{paddingBottom: 15}}>
          <TextInput
            mode="outlined"
            left={
              <TextInput.Icon
                name="email"
                color={button.commonColor.color}
                size={20}
              />
            }
            style={button.commonTextInput}
            theme={{roundness: 20}}
            placeholder="Email id"
            value={email}
            onChangeText={value => {
              setEmail(value.trim());
              setEmailError(false);
            }}
          />
          {emailError && (
            <HelperText type="error" visible={emailError}>
              Please Enter User name or Email Id
            </HelperText>
          )}
        </View>
        <View style={{paddingBottom: 15}}>
          <TextInput
            mode="outlined"
            keyboardType="number-pad"
            left={
              <TextInput.Icon
                name="cellphone"
                color={button.commonColor.color}
                size={20}
              />
            }
            style={button.commonTextInput}
            theme={{roundness: 20}}
            placeholder="Phone Number"
            onChangeText={text => {
              setPhoneNumberError(false);
              setPhoneNumber(text);
            }}
            onChangeFormattedText={text => {
              setPhoneNumberFormat(text);
            }}
            textInputProps={{placeholderTextColor: '#9a9a9a', height: 40}}
          />
          {phoneNumberError && (
            <HelperText type="error" visible={phoneNumberError}>
              Valid Mobile number is Required
            </HelperText>
          )}
        </View>
        <View style={{paddingBottom: 15}}>
          <TextInput
            style={button.commonTextInput}
            left={
              <TextInput.Icon
                name="lock"
                color={button.commonColor.color}
                size={20}
              />
            }
            mode="outlined"
            placeholder="Password"
            theme={{roundness: 20}}
            secureTextEntry={passwordVisible}
            right={
              <TextInput.Icon
                name={passwordVisible ? 'eye' : 'eye-off'}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
            onChangeText={password => {
              setPassword(password);
              setPasswordError(false);
            }}
          />
          {passwordError && (
            <HelperText type="error" visible={passwordError}>
              Please Enter Valid Passwoad
            </HelperText>
          )}
        </View>
        <View style={{paddingBottom: 15}}>
          <TextInput
            style={button.commonTextInput}
            left={
              <TextInput.Icon
                name="lock"
                color={button.commonColor.color}
                size={20}
              />
            }
            theme={{roundness: 20}}
            mode="outlined"
            placeholder="Confirm Password"
            secureTextEntry={passwordVisible}
            right={
              <TextInput.Icon
                name={passwordVisible ? 'eye' : 'eye-off'}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
            onChangeText={confirmPassword => {
              setConfirmPassword(confirmPassword);
              setConfirmPasswordError(false);
            }}
          />
          {confirmPasswordError && (
            <HelperText type="error" visible={confirmPasswordError}>
              Password and confirm password should be same
            </HelperText>
          )}
          <View style={{paddingTop: 15}}>
            <Button
              mode="contained"
              style={button.commonButton}
              onPress={() => {
                signupHandle();
              }}>
              SIGNUP
            </Button>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', textAlign: 'center', marginTop: 30}}>
          <Text
            style={{
              fontSize: 14,
              color: '#9a9a9a',
              marginLeft: 40,
              fontWeight: '700',
            }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.push('Login')}>
            <Text
              style={[button.commonColor, {fontWeight: 'bold', marginLeft: 5}]}>
              Login
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
