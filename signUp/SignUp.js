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

export default function SignUp(props) {
  const {navigation} = props;
  console.log('props ==> ', navigation);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  let error = false;

  const validateData = () => {
    try {
      if (userName == null || userName == '') {
        error = true;
        setUserNameError('Please Enter User Name');
      }
      if (email == null || email == '') {
        error = true;
        setEmailError('Please Enter Email Id');
      }

      if (password == null || password == '') {
        error = true;
        setPasswordError('Please Enter Password');
      }
      else  if (password == !null && (password.length < 8 || password.length > 20)) {
        error = true;
        setPasswordError('Password should be min 8 char and max 20 char');
      }
      else if (password == !null && (password !== confirmPassword) ) {
        errorFlag = true;
        setPasswordError("Passwoad and confirm password should be same.");
        setConfirmPasswordError("Passwoad and confirm password should be same.")
      }

      if (confirmPassword == null || confirmPassword == '') {
        error = true;
        setConfirmPasswordError('Please enter confirm Password');
      }
      

     if (!error) {
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
            onChangeText={userName => setUserName(userName)}
          />
        </View>
        <View>
        {userNameError.length > 0 && (
          <Text style={styles.textDanger}>{userNameError}</Text>
        )}
      </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Email"
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>
        <View>
        {emailError.length > 0 && (
          <Text style={styles.textDanger}>{emailError}</Text>
        )}
      </View>


        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Password"
            placeholderTextColor="#003f5c"
            onChangeText={password => setPassword(password)}
          />
        </View>
        <View>
        {passwordError.length > 0 && (
          <Text style={styles.textDanger}>{passwordError}</Text>
        )}
      </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
          />
        </View>

        <View>
        {confirmPasswordError.length > 0 && (
          <Text style={styles.textDanger}>{confirmPasswordError}</Text>
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
          <Text style = {styles.loginText}> Already have an account?</Text>
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
  loginBtn:{
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
