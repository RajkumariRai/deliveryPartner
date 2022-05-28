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

export default function LoginScreen(props) {
  const {navigation} = props;
  console.log('props ==> ', navigation);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  let error = false;

  const validateData = () => {
    try {
      if (email == null || email == '') {
        error = true;
        setEmailError('Please Enter Email Id');
      }

      if (password == null || password == '') {
        error = true;
        setpasswordError('Please Enter Password');
      }
      if (password == !null && (password.length < 8 || password.length > 20)) {
        error = true;
        setpasswordError('Password should be min 8 char and max 20 char');
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
          }}
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
          placeholder="Password."
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View>
        {passwordError.length > 0 && (
          <Text style={styles.textDanger}>{passwordError}</Text>
        )}
      </View>
      <View >
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
          navigation.push('sideMenu');
        }}>
        <Text  style={styles.signupBtn}>SIGNUP</Text>
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
    alignItems:'flex-end',
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
  signupText:{
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
