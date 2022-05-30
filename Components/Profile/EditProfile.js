import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React from 'react';
import HOC from '../HOC/HOC';
import UserAvatar from 'react-native-user-avatar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const EditProfile = () => {
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
            <View style={{paddingTop: 15,paddingBottom:100}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '45%'}}>
                  <Text style={styles.textlabel}>First Name</Text>
                  <TextInput
                    style={styles.TextInputBorder}
                    placeholder="First Name"
                    placeholderTextColor="#000"
                    //   onChangeText={value => {
                    //     setEmail(value);
                    //     setEmailError(false);
                    //   }}
                  />
                </View>
                <View style={{width: '45%'}}>
                  <Text style={styles.textlabel}>Last Name</Text>
                  <TextInput
                    style={styles.TextInputBorder}
                    placeholder="Last Name"
                    placeholderTextColor="#000"
                    //   onChangeText={value => {
                    //     setEmail(value);
                    //     setEmailError(false);
                    //   }}
                  />
                </View>
              </View>
              <View style={{paddingTop: 12}}>
                <Text style={styles.textlabel}>Email id</Text>

                <TextInput
                  style={styles.TextInputBorder}
                  placeholder="Email id"
                  placeholderTextColor="#000"
                  //   onChangeText={value => {
                  //     setEmail(value);
                  //     setEmailError(false);
                  //   }}
                />
              </View>
              <View style={{paddingTop: 12}}>
                <Text style={styles.textlabel}>Phone Number</Text>
                <TextInput
                  style={styles.TextInputBorder}
                  placeholder="Phone Number"
                  placeholderTextColor="#000"
                  //   onChangeText={value => {
                  //     setEmail(value);
                  //     setEmailError(false);
                  //   }}
                />
              </View>
              <View style={{paddingTop: 12}}>
                <Text style={styles.textlabel}>Identity Card Number</Text>
                <TextInput
                  style={styles.TextInputBorder}
                  placeholder="Identity Card Number"
                  placeholderTextColor="#000"
                  //   onChangeText={value => {
                  //     setEmail(value);
                  //     setEmailError(false);
                  //   }}
                />
              </View>
              <View style={{paddingTop: 12}}>
                <Text style={styles.textlabel}>Vehical Number</Text>
                <TextInput
                  style={styles.TextInputBorder}
                  placeholder="Vehical Number"
                  placeholderTextColor="#000"
                  //   onChangeText={value => {
                  //     setEmail(value);
                  //     setEmailError(false);
                  //   }}
                />
              </View>
              
            </View>
          </View>
        </View>
      </ScrollView>
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
});

export default HOC(EditProfile);
