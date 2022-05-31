import React, {useState,useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
import {
  blankValidator,
  emailValidator,
  nameValidation,
} from '../utils/Validation';

export default function SignUp(props) {
  const {navigation} = props;
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [phoneNumberFormat, setPhoneNumberFormat] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  

  let flag = false;

  const validateData = () => {
    try {
      if (!userName || nameValidation(userName)) {
        setUserNameError(true);
        flag = true;
      } else if (!phoneNumber) {
        setPhoneNumberError(true);
        flag = true;
      } else if (!email || !emailValidator(email)) {
        setEmailError(true);
        flag = true;
      } else if (!password || password.length < 8 || password.length > 20) {
        setPasswordError(true);
        flag = true;
      } else if (!confirmPassword) {
        setConfirmPasswordError(true);
        flag = true;
      } else if (password && confirmPassword && password !== confirmPassword) {
        setConfirmPasswordError(true);
        flag = true;
      }
      if (!flag) {
        navigation.push('dashboard');
      }
    } catch (error) {
      console.log('error in validaton', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/Logo.png')} />

        <View style={styles.inputView}>
          <TextInput
            left={<TextInput.Icon name="account" />}
            style={styles.TextInput}
            placeholder="Enter Username"
            placeholderTextColor="#003f5c"
            onChangeText={userName => {
              setUserName(userName);
              setUserNameError(false);
            }}
          />
        </View>
        <View>
          {userNameError && (
            <HelperText type="error" visible={userNameError}>
              Please Enter Valid User Name
            </HelperText>
          )}
        </View>

        <View style={styles.inputView}>
          <PhoneInput
        
            defaultValue={phoneNumber}
            defaultCode="IN"
            layout="first"
            style={styles.TextInput}
            onChangeText={text => {
              setPhoneNumberError(false);
              setPhoneNumber(text);
            }}
            onChangeFormattedText={text => {
              setPhoneNumberFormat(text);
            }}
          />
        </View>
        {phoneNumberError && (
          <HelperText type="error" visible={phoneNumberError}>
            Valid Mobile number is Required
          </HelperText>
        )}

        <View style={styles.inputView}>
          <TextInput
            left={<TextInput.Icon name="email" />}
            style={styles.TextInput}
            placeholder="Enter Email"
            placeholderTextColor="#003f5c"
            onChangeText={email => {
              setEmail(email.trim());
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
            left={<TextInput.Icon name="lock" />}
            style={styles.TextInput}
            placeholder="Enter Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={passwordVisible}
            onChangeText={password => {
              setPassword(password);
              setPasswordError(false);
            }}
            right={
              <TextInput.Icon
                name={passwordVisible ? 'eye' : 'eye-off'}
                onPress={() => setNewPasswordVisible(!newPasswordVisible)}
              />
            }
          />
        </View>
        <View>
          {passwordError && (
            <HelperText type="error" visible={passwordError}>
              Please Enter Valid Passwoad
            </HelperText>
          )}
        </View>

        <View style={styles.inputView}>
          <TextInput
            left={<TextInput.Icon name="lock" />}
            style={styles.TextInput}
            placeholder="Confirm Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={confirmPassword => {
              setConfirmPassword(confirmPassword);
              setConfirmPasswordError(false);
            }}
          />
        </View>

        <View>
          {confirmPasswordError && (
            <HelperText type="error" visible={confirmPasswordError}>
              Passwoad and confirm password should be same
            </HelperText>
          )}
        </View>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => {
            validateData();
          }}>
          <Text>SIGNUP</Text>
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: 14, color: '#9a9a9a', marginTop: 15}}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.push('Login')}>
            <Text style={{color: '#26ae61', textAlign: 'center'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
    alignItems: 'center',
    padding: 5,
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
    marginLeft: 20,
  },

  signUpBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#2EE59D',
  },
  loginText: {
    padding: 10,
  },
  loginBtn: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  textDanger: {
    color: '#dc3545',
    marginBottom: 10,
  },
});
