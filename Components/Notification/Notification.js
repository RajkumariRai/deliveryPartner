import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {button} from '../CommonStyles/Index';
import ZeroNotification from './ZeroNotification';
import NotificationList from './NotificationList';

const Notification = props => {
  const {navigation} = props;
  const [notificationArray, setNotificationArray] = useState([
    {order: 'ORD #48 was assign to you', date: '2022-02-10'},
    {order: 'ORD #48 was assign to you', date: '2022-02-10'},
    {order: 'ORD #48 was assign to you', date: '2022-02-10'},
    {order: 'ORD #48 was assign to you', date: '2022-02-10'},
    {order: 'ORD #48 was assign to you', date: '2022-02-10'},
    {order: 'ORD #48 was assign to you', date: '2022-02-10'},
    {order: 'ORD #48 was assign to you', date: '2022-02-10'},
  ]);

  const notificationHandle = () => {
    navigation.push('Notifcation');
  };
  return (
    <View style={styles.zeroMainView}>
      <View style={[button.commonBackgroundColor, {padding: 5}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'arrow-left'} size={16} color="#fff" />
            </TouchableOpacity>
            <Text style={[styles.titleColor, {paddingLeft: 10}]}>
              Notifcations
            </Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                notificationHandle();
              }}>
              <Icon name={'bell'} size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {notificationArray.length === 0 ? (
        <ZeroNotification {...props} />
      ) : (
        <NotificationList data={notificationArray} {...props} />
      )}
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  titleColor: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  zeroMainView: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
});
