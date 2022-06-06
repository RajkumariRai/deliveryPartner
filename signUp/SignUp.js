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
            label="Username"
            onChangeText={value => {
              setUserName(userName);
              setUserNameError(false);
            }}
          />
          {userNameError && (
            <HelperText type="error" visible={userNameError}>
              Please Enter Valid User Name
            </HelperText>
          )}
        </View>

        <View>
          <TextInput
            mode="outlined"
            left={<TextInput.Icon name="email" />}
            style={button.commonTextInput}
            label="Email id"
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
          <PhoneInput
            containerStyle={{
              margin: 4,
              borderColor: '#9a9a9a',
              borderWidth: 1,
              width: '97%',
              height: 45,
            }}
            codeTextStyle={{color: '#9a9a9a'}}
            flagButtonStyle={{color: '#9a9a9a'}}
            placeholder="Phone Number"
            withDarkTheme
            // textInputStyle={button.commonTextInput}
            defaultValue={phoneNumber}
            defaultCode="IN"
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
        <View>
          <TextInput
            style={button.commonTextInput}
            left={<TextInput.Icon name="lock" />}
            mode="outlined"
            label="Password"
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
            <HelperText
              type="error"
              visible={passwordError}
              style={{textAlign: 'center'}}>
              Please Enter Valid Passwoad
            </HelperText>
          )}
        </View>
        <View>
          <TextInput
            style={button.commonTextInput}
            left={<TextInput.Icon name="lock" />}
            mode="outlined"
            label="Confirm Password"
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
                validateData();
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
