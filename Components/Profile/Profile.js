import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HOC from '../HOC/HOC';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Profile = (props) => {
  return (
    <SafeAreaView style={styles.safeAreaWidth}>
      <View style={{backgroundColor: '#fff'}}>
        <View style={styles.profileTopBgColor}>
          <View style={{alignItems: 'flex-end', paddingRight: 20}}>
            <TouchableOpacity onPress={()=>{
                props.navigation.push('edit-Profile');
            }}>
              <Icon
                name={'edit'}
                size={20}
                color="#fff"
                style={styles.iconPadding}
              />
            </TouchableOpacity>
          </View>
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
                color="#26ae61"
                style={styles.iconPadding}
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
                color="#26ae61"
                style={styles.iconPadding}
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
                color="#26ae61"
                style={styles.iconPadding}
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
                color="#26ae61"
                style={styles.iconPadding}
              />
              <Text style={styles.inputvalueColor}>GJ21AF3333</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaWidth: {
    width: '100%',
    height: '100%',
  },
  profileTopBgColor: {
    backgroundColor: '#26ae61',
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
