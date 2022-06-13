import {StyleSheet} from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashBoard from '../Dashboard/DashBoard';
import Orders from '../Orders/Orders';
import Notification from '../Notification/Notification';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Dashboard" component={DashBoard} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Notifcation" component={Notification} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
