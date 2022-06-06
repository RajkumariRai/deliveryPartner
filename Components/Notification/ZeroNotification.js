import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Button} from 'react-native-paper';
import {button} from '../CommonStyles/Index';

const ZeroNotification = props => {
  const {navigation} = props;
  return (
    <View style={styles.zeroNotifcationFlex}>
      <View style={styles.bellBorderColor}>
        <Icon name={'bell'} size={50} color="#fff" />
      </View>
      <View>
        <Text style={styles.tilteColor}>
          Don't have any item in notifcation list
        </Text>
      </View>
      <View style={styles.buttonMargin}>
        <Button
          style={button.commonButton}
          mode="contained"
          onPress={() => {
            navigation.push('dashboard');
          }}>
          Go To DashBoard
        </Button>
      </View>
    </View>
  );
};

export default ZeroNotification;

const styles = StyleSheet.create({
  zeroNotifcationFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellBorderColor: {
    backgroundColor: 'rgb(200,200,200)',
    padding: 22,
    borderRadius: 50,
    marginBottom: 15,
  },
  tilteColor: {
    fontSize: 18,
    color: 'rgb(200,200,200)',
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonMargin: {
    paddingTop: 20,
  },
});
