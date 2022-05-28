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
import {
  blankValidator,
  emailValidator,
  nameValidation,
} from '../utils/Validation';

export default function SignUp(props) {
  const {navigation} = props;
  console.log('props ==> ', navigation);
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  let flag= false;
  const validateData = () => {
    try {
      if (!userName || nameValidation(userName)) {
        setUserNameError(true);
        flag= true
      }
      if (!email || !emailValidator(email)) {
        setEmailError(true);
        flag= true
      }
      if (!password || password.length < 8 || password.length > 20) {
        setPasswordError(true);
        flag= true
      }
      if (!confirmPassword) {
        setConfirmPasswordError(true);
        flag= true
      } else if (password && confirmPassword && (password !== confirmPassword)) {
        setConfirmPasswordError(true);
        flag= true
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
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Email"
            placeholderTextColor="#003f5c"
            onChangeText={email => {
              setEmail(email);
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
            placeholder="Enter Password"
            placeholderTextColor="#003f5c"
            onChangeText={password => {
              setPassword(password);
              setPasswordError(false);
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

        <View style={styles.inputView}>
          <TextInput
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
          <Text style={styles.loginText}> Already have an account?</Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              navigation.push('Login');
            }}>
            <Text>Login</Text>
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
