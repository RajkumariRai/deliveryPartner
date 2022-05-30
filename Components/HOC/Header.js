import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = props => {
  const {leftIcon, tilte, rightIcon} = props;
  return (
    <View style={styles.headrBgColor}>
      <View style={styles.flexSpace}>
        <View>
          <Icon name={'bars'} size={12} color="#fff" />
        </View>
        <View>
          <Text style={styles.titleColor}>Dashboard</Text>
        </View>
        <View>
          <Icon name={'bell'} size={12} color="#fff" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headrBgColor: {
    backgroundColor: '#26ae61',
    padding: 10,
  },
  flexSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleColor: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default Header;
