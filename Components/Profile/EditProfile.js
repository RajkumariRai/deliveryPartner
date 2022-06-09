import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {HelperText, TextInput} from 'react-native-paper';
import HOC from '../HOC/HOC';
import UserAvatar from 'react-native-user-avatar';
import ChangePassword from '../Dailogs/ChangePassword';
import {emailValidator} from '../../utils/Validation';
import {button} from '../CommonStyles/Index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
    <>
      <ScrollView>
        <View style={[styles.safeAreaWidth, button.commonBackgroundColor]}>
          <View style={styles.editProfilebottomColor}>
            <View style={{padding: 15}}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.userImageSet}>
                  <View style={{flex: 1}}>
                    <UserAvatar
                      size={90}
                      name={'Jhon Doe'}
                      src={''}
                      borderRadius={50}
                      style={{zIndex: 999}}
                    />
                    <View style={styles.cameraBgColor}>
                      <Icon
                        name={'camera'}
                        size={12}
                        style={[button.commonColor]}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    paddingLeft: 20,
                    // flex: 1,
                    // justifyContent: 'center',
                  }}>
                  <Text style={[styles.userNameFont, button.commonColor]}>
                    John Deo
                  </Text>
                  <Text style={[styles.userEmailColor, button.commonColor]}>
                    driverone@gmail.com
                  </Text>
                </View>
              </View>
              {/* Form section */}
              <View style={{paddingTop: 15, paddingBottom: 50}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: '45%'}}>
                    <Text style={styles.textlabel}>First Name</Text>
                    <TextInput
                      mode="outlined"
                      left={
                        <TextInput.Icon
                          name="account"
                          color={button.commonColor.color}
                        />
                      }
                      style={button.commonTextInput}
                      theme={{roundness: 20}}
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
                      mode="outlined"
                      style={button.commonTextInput}
                      theme={{roundness: 20}}
                      placeholder="Last Name"
                      placeholderTextColor="#000"
                      value={lastName}
                      onChangeText={value => {
                        setLastName(value);
                      }}
                    />
                  </View>
                </View>
                <View style={styles.inputPaddingTop}>
                  <Text style={styles.textlabel}>Email id</Text>
                  <TextInput
                    mode="outlined"
                    left={
                      <TextInput.Icon
                        name="email"
                        color={button.commonColor.color}
                      />
                    }
                    style={button.commonTextInput}
                    theme={{roundness: 20}}
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
                <View style={styles.inputPaddingTop}>
                  <Text style={styles.textlabel}>Phone Number</Text>
                  <TextInput
                    mode="outlined"
                    left={
                      <TextInput.Icon
                        name="phone"
                        color={button.commonColor.color}
                      />
                    }
                    style={button.commonTextInput}
                    theme={{roundness: 20}}
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
                <View style={styles.inputPaddingTop}>
                  <Text style={styles.textlabel}>Identity Card Number</Text>
                  <TextInput
                    mode="outlined"
                    left={
                      <TextInput.Icon
                        name="card-account-details"
                        color={button.commonColor.color}
                      />
                    }
                    style={button.commonTextInput}
                    theme={{roundness: 20}}
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
                <View style={styles.inputPaddingTop}>
                  <Text style={styles.textlabel}>Vehical Number</Text>
                  <TextInput
                    mode="outlined"
                    left={
                      <TextInput.Icon
                        name="bike"
                        color={button.commonColor.color}
                      />
                    }
                    style={button.commonTextInput}
                    theme={{roundness: 20}}
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
                  style={[
                    button.commonSpaceBetween,
                    {
                      paddingTop: '7%',
                      paddingBottom: '5%',
                    },
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      chnagePasswordHandle();
                    }}>
                    <View
                      style={
                        active == 1
                          ? button.commonActiveButtonHeight
                          : button.commonInactiveButtonHeight
                      }>
                      <Text
                        style={
                          active == 1
                            ? button.commonActiveTextDeco
                            : button.commonInactiveTextDeco
                        }>
                        Change Password
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      saveChangeHandle();
                    }}>
                    <View
                      style={
                        active == 2
                          ? button.commonActiveButtonHeight
                          : button.commonInactiveButtonHeight
                      }>
                      <Text
                        style={
                          active == 2
                            ? button.commonActiveTextDeco
                            : button.commonInactiveTextDeco
                        }>
                        Save Changes
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {changePasswordDailog && (
        <ChangePassword
          open={chnagePasswordHandle}
          close={setChangePasswordDailog}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  safeAreaWidth: {
    flexGrow: 1,
    paddingTop: 60,
  },
  editProfilebottomColor: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: -99,
  },
  userImageSet: {
    alignItems: 'flex-start',
    marginTop: -40,
    zIndex: 999,
  },
  userNameFont: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  userEmailColor: {
    fontSize: 14,
  },

  textlabel: {
    color: 'rgb(211, 211, 211)',
    fontSize: 13,
    paddingLeft: 7,
  },

  cameraBgColor: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 3,
    position: 'absolute',
    top: 0,
    right: 5,
    zIndex: 999,
  },
  inputPaddingTop: {
    paddingTop: 15,
  },
});

export default HOC(EditProfile);
