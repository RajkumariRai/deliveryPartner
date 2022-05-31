import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Button, HelperText} from 'react-native-paper';
import HOC from '../HOC/HOC';
import UserAvatar from 'react-native-user-avatar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ChangePassword from '../Dailogs/ChangePassword';
import {emailValidator} from '../../utils/Validation';

const EditProfile = () => {
  const [active, setActive] = useState(2);
  const [changePasswordDailog, setChangePasswordDailog] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [emailIdError, setEmailIdError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberError, setCardNumberError] = useState(false);
  const [vehicalNumber, setVehicalNumber] = useState('');
  const [vehicalNumberError, setVehicalNumberError] = useState(false);

  // chnage password button handle
  const chnagePasswordHandle = () => {
    setActive(1);
    setChangePasswordDailog(true);
  };
  const passwordDailogClose = () => {
    setChangePasswordDailog(false);
  };
  // save chnages button handle
  const saveChangeHandle = () => {
    setActive(2);
    if (!firstName) {
      setFirstNameError(true);
    }
    if (!emailValidator(emailId)) {
      setEmailIdError(true);
    }
    if (!phoneNumber) {
      setPhoneNumberError(true);
    }
    if (!cardNumber) {
      setCardNumberError(true);
    }
    if (!vehicalNumber) {
      setVehicalNumberError(true);
    }
    if (
      !firstName ||
      !emailValidator(emailId) ||
      !phoneNumber ||
      !cardNumber ||
      !vehicalNumber
    ) {
      return;
    }
  };
  return (
    <View style={styles.safeAreaWidth}>
      <ScrollView>
        <View>
          <View style={styles.editProfilebottomColor}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.userImageSet}>
                <UserAvatar
                  size={90}
                  name={'Jhon Doe'}
                  src={''}
                  borderRadius={50}
                  style={{zIndex: 999}}
                />
              </View>
              <View
                style={{
                  paddingLeft: 20,
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text style={styles.userNameFont}>John Deo</Text>
                <Text style={styles.userEmailColor}>driverone@gmail.com</Text>
              </View>
            </View>
            {/* Form section */}
            <View style={{paddingTop: 15, paddingBottom: 100}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '45%'}}>
                  <Text style={styles.textlabel}>First Name</Text>
                  <TextInput
                    style={styles.TextInputBorder}
                    placeholder="First Name"
                    placeholderTextColor="#000"
                    value={firstName}
                    onChangeText={value => {
                      setFirstName(value);
                      setFirstNameError(false);
                    }}
                  />
                  {firstNameError && (
                    <HelperText type="error" visible={firstNameError}>
                      Enter First Name
                    </HelperText>
                  )}
                </View>
                <View style={{width: '45%'}}>
                  <Text style={styles.textlabel}>Last Name</Text>
                  <TextInput
                    style={styles.TextInputBorder}
                    placeholder="Last Name"
                    placeholderTextColor="#000"
                    value={lastName}
                    onChangeText={value => {
                      setLastName(value);
                    }}
                  />
                </View>
              </View>
              <View style={{paddingTop: 12}}>
                <Text style={styles.textlabel}>Email id</Text>

                <TextInput
                  style={styles.TextInputBorder}
                  placeholder="Email id"
                  placeholderTextColor="#000"
                  value={emailId}
                  onChangeText={value => {
                    setEmailId(value);
                    setEmailIdError(false);
                  }}
                />
                {emailIdError && (
                  <HelperText type="error" visible={emailIdError}>
                    Enter Valid Email id
                  </HelperText>
                )}
              </View>
              <View style={{paddingTop: 12}}>
                <Text style={styles.textlabel}>Phone Number</Text>
                <TextInput
                  style={styles.TextInputBorder}
                  keyboardType="numeric"
                  placeholder="Phone Number"
                  placeholderTextColor="#000"
                  value={phoneNumber}
                  onChangeText={value => {
                    setPhoneNumber(value);
                    setPhoneNumberError(false);
                  }}
                />
                {phoneNumberError && (
                  <HelperText type="error" visible={phoneNumberError}>
                    Enter Phone Number
                  </HelperText>
                )}
              </View>
              <View style={{paddingTop: 12}}>
                <Text style={styles.textlabel}>Identity Card Number</Text>
                <TextInput
                  style={styles.TextInputBorder}
                  placeholder="Identity Card Number"
                  placeholderTextColor="#000"
                  value={cardNumber}
                  onChangeText={value => {
                    setCardNumber(value);
                    setCardNumberError(false);
                  }}
                />
                {cardNumberError && (
                  <HelperText type="error" visible={cardNumberError}>
                    Enter Identity Card Number
                  </HelperText>
                )}
              </View>
              <View style={{paddingTop: 12}}>
                <Text style={styles.textlabel}>Vehical Number</Text>
                <TextInput
                  style={styles.TextInputBorder}
                  placeholder="Vehical Number"
                  placeholderTextColor="#000"
                  value={vehicalNumber}
                  onChangeText={value => {
                    setVehicalNumber(value);
                    setVehicalNumberError(false);
                  }}
                />
                {vehicalNumberError && (
                  <HelperText type="error" visible={vehicalNumberError}>
                    Enter Vehical Number
                  </HelperText>
                )}
              </View>
              <View
                style={{
                  paddingTop: 12,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Button
                  style={
                    active == 1
                      ? [styles.ActiveButton]
                      : [styles.inactiveButton]
                  }
                  mode={active == 1 ? 'contained' : 'outlined'}
                  color={active == 1 ? '' : 'rgb(211, 211, 211)'}
                  onPress={() => {
                    chnagePasswordHandle();
                  }}>
                  Change Password
                </Button>
                <Button
                  mode={active == 2 ? 'contained' : 'outlined'}
                  color={active == 2 ? '' : 'rgb(211, 211, 211)'}
                  style={
                    active == 2
                      ? [styles.ActiveButton, {marginLeft: 5}]
                      : [styles.inactiveButton, {marginLeft: 5}]
                  }
                  onPress={() => {
                    saveChangeHandle();
                  }}>
                  Save Changes
                </Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {changePasswordDailog && (
        <ChangePassword
          open={chnagePasswordHandle}
          close={passwordDailogClose}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  safeAreaWidth: {
    flexGrow: 1,
    backgroundColor: '#26ae61',
    paddingTop: 60,
  },
  editProfilebottomColor: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    zIndex: -99,
  },
  userImageSet: {
    alignItems: 'flex-start',
    marginTop: -10,
    zIndex: 999,
  },
  userNameFont: {
    color: '#26ae61',
    fontSize: 25,
    fontWeight: 'bold',
  },
  userEmailColor: {
    color: '#26ae61',
    fontSize: 14,
  },
  TextInputBorder: {
    borderColor: 'rgb(211, 211, 211)',
    borderWidth: 1,
    height: 35,
    borderRadius: 20,
    padding: 10,
    width: '100%',
  },
  textlabel: {
    color: 'rgb(211, 211, 211)',
    fontSize: 13,
    padding: 5,
  },
  ActiveButton: {
    backgroundColor: '#26ae61',
    color: '#fff',
    borderRadius: 30,
    fontWeight: '700',
  },
  inactiveButton: {
    backgroundColor: '#fff',
    color: '#26ae61',
    borderRadius: 30,
    fontWeight: '700',
  },
});

export default HOC(EditProfile);
