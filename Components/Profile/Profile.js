import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import HOC from '../HOC/HOC';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {button} from '../CommonStyles/Index';

const Profile = props => {
  return (
    <View style={styles.safeAreaWidth}>
      <ScrollView>
        <View style={[styles.profileTopBgColor, button.commonBackgroundColor]}>
          <View style={styles.profileImageCenter}>
            <UserAvatar
              size={90}
              name={'Jhon Doe'}
              src={''}
              borderRadius={50}
            />
            <Text style={styles.userNameColor}>Jhon Doe</Text>
          </View>
        </View>
        <View style={{padding: 25}}>
          <View style={styles.borderBottomColor}>
            <Text style={styles.labelColor}>Email id</Text>
            <View style={styles.flexiconMessage}>
              <Icon
                name={'envelope'}
                size={12}
                style={[styles.iconPadding, button.commonColor]}
              />
              <Text style={styles.inputvalueColor}>AnkurD@gmail.com</Text>
            </View>
          </View>
          <View style={styles.borderBottomColor}>
            <Text style={styles.labelColor}>Phone Number</Text>
            <View style={styles.flexiconMessage}>
              <Icon
                name={'mobile-phone'}
                size={12}
                style={[styles.iconPadding, button.commonColor]}
              />
              <Text style={styles.inputvalueColor}>+91 3333 3333 33</Text>
            </View>
          </View>
          <View style={styles.borderBottomColor}>
            <Text style={styles.labelColor}>Identity Card Number</Text>
            <View style={styles.flexiconMessage}>
              <Icon
                name={'id-card-o'}
                size={12}
                style={[styles.iconPadding, button.commonColor]}
              />
              <Text style={styles.inputvalueColor}>11112-35345-34535</Text>
            </View>
          </View>
          <View>
            <Text style={styles.labelColor}>Vehical Number</Text>
            <View style={styles.flexiconMessage}>
              <Icon
                name={'car'}
                size={12}
                style={[styles.iconPadding, button.commonColor]}
              />
              <Text style={styles.inputvalueColor}>GJ21AF3333</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  safeAreaWidth: {
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  profileTopBgColor: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImageCenter: {
    alignItems: 'center',
    paddingTop: 20,
  },
  userNameColor: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    paddingTop: 10,
    paddingBottom: 20,
  },
  labelColor: {
    fontSize: 12,
    color: 'rgb(211, 211, 211)',
    paddingBottom: 8,
  },
  borderBottomColor: {
    borderBottomColor: 'rgb(211, 211, 211)',
    borderBottomWidth: 2,
    marginBottom: 15,
    paddingBottom: 15,
  },
  flexiconMessage: {
    flexDirection: 'row',
  },
  inputvalueColor: {
    color: '#333',
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 10,
  },
  iconPadding: {
    paddingTop: 2,
  },
});
export default HOC(Profile);
