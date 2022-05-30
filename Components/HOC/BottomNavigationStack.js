import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BottomNavigationStack = () => {
  return (
    <View style={styles.bottomNavigationPostion}>
      <Text>BottomNavigationStack</Text>
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
});

export default BottomNavigationStack;
