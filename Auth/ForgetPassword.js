import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {HelperText, TextInput, Button} from 'react-native-paper';
import {button} from '../Components/CommonStyles/Index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
    <View style={styles.loginMainView}>
      <View style={{position: 'absolute', top: 0}}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'arrow-left'} size={16} color="rgb(112,112,112)" />
            </TouchableOpacity>
          </View>
          <View style={{width: '100%'}}>
            <Text
              style={[
                button.commonColor,
                {textAlign: 'center', fontWeight: '700'},
              ]}>
              Forgot Password
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.image}>
        <Image source={require('../assets/Logo.png')} />
      </View>
      <View style={styles.formSectionPadding}>
        <View
          style={{
            paddingRight: 40,
            paddingLeft: 40,
            paddingBottom: 40,
          }}>
          <Text style={styles.forgotpassTitleColor}>
            Please enter your email address.. you will recieve a link to create
            a new password via email
          </Text>
        </View>
        <View style={{paddingBottom: 15, paddingTop: 15}}>
          <TextInput
            mode="outlined"
            theme={{roundness: 20}}
            left={
              <TextInput.Icon name="email" color={button.commonColor.color} />
            }
            style={button.commonTextInput}
            placeholder="Email"
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
        <View style={{marginTop: 10}}>
          <Button
            mode="contained"
            style={button.commonButton}
            onPress={() => {
              validateData();
            }}>
            Reset Password
          </Button>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: '#d60e0e',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 30,
              }}>
              Login?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginMainView: {
    flex: 1,
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  image: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  formSectionPadding: {
    padding: 15,
  },
  forgotpassTitleColor: {
    color: 'rgb(112,112,112)',
    fontSize: 12,
    textAlign: 'center',
  },
});
