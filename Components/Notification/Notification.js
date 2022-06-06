import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HOC from '../HOC/HOC';

const Notification = () => {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};

export default HOC(Notification);

const styles = StyleSheet.create({});
