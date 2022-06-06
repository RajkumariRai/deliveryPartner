import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DashBoard from '../Dashboard/DashBoard';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="dashboard"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 10},
        }}>
        <Drawer.Screen name="dashboard" key={DashBoard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
