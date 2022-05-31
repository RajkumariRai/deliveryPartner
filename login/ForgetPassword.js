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

export default function ForgetPassword(props) {
  const {navigation} = props;
  console.log('props ==> ', navigation);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
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

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            console.log('I ma here ');
            validateData();
          }}>
          <Text style={styles.loginText}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: '#26ae61', textAlign: 'center'}}>Login?</Text>
        </TouchableOpacity>
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
    fontSize: 15,
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
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: '#26ae61',
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 50,
  },
  textDanger: {
    color: '#dc3545',
    marginBottom: 10,
  },
});
