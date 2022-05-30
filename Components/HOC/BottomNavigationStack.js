import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BottomNavigationStack = () => {
  return (
    <View style={styles.bottomNavigationPostion}>
      <View style={styles.bottomSpaceArround}>
        <View style={styles.buttonCenter}>
          <Text>DashBoard</Text>
        </View>
        <View style={styles.buttonCenter}>
          <Text>Orders</Text>
        </View>
        <View style={styles.buttonCenter}>
          <Text>My Profile</Text>
        </View>
        <View style={styles.buttonCenter}>
          <Text>Setting</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomNavigationPostion: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 9,
    width: '100%',
    height: 50,
    padding: 10,
    borderTopColor: 'rgb(154, 154, 154)',
    borderTopWidth: 1,
  },
  bottomSpaceArround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonCenter: {
    alignItems: 'center',
  },
});

export default BottomNavigationStack;
