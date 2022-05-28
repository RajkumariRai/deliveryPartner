import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../Header/Header';

const DashBoard = () => {
  return (
    <View>
      <Header leftIcon={'bars'} tilte={'Dashboard'} rightIcon={'bell'} />
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  
});
export default DashBoard;
