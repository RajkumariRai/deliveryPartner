import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {button} from '../CommonStyles/Index';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Sidebar from './Sidebar';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Sidebar {...props} />
        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>
      <View></View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userDeatil: {
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
  },
  messageBorder: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 5,
    position: 'absolute',
    bottom: 5,
    right: 0,
  },
  userInfoPadding: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  userNameColor: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '700',
  },
  userEmailColor: {
    color: '#fff',
  },
});
