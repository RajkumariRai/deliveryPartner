import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {HelperText, TextInput, Button} from 'react-native-paper';
import { button } from '../Components/CommonStyles/Index';

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
<View style={styles.image}>
  <Image source={require('../assets/Logo.png')} />
</View>

<View style={styles.formSectionPadding}>
<View style={{paddingTop:50, paddingRight:40, paddingLeft:40, paddingBottom:20,justifyContent:'center',fontWeight:'500', fontSize:'12'}}>
<Text>Please enter your email address.. you will recieve a link 
          to create a new password via email</Text>
          </View>
  <View>
    <TextInput
      mode="outlined"
      left={<TextInput.Icon name="email" />}
      style={button.commonTextInput}
      label="Email"
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
       <View style={{marginTop:10}}>
          <Button
            mode="contained"
            style={button.commonButton}
            onPress={() => {
              validateData();
            }}>
           Reset Password
          </Button>
        </View>
        <View >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#d60e0e', fontWeight: 'bold', textAlign:'center',marginTop:30}}>
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
  },
  image: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  formSectionPadding: {
    padding: 15,
  },
});
