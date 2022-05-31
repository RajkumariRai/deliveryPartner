import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const BottomNavigationStack = props => {
  const [active, setActive] = useState(1);
  const {route} = props;

  useEffect(() => {
    if (route.name === 'dashboard') {
      setActive(1);
    } else if (route.name === 'Orders') {
      setActive(2);
    } else if (route.name === 'profile' || route.name === 'edit-Profile') {
      setActive(3);
    } else {
      setActive(4);
    }
  }, [props]);
  const homehandle = () => {
    setActive(1);
    props.navigation.replace('dashboard');
  };
  const orderHandle = () => {
    setActive(2);
    props.navigation.push('Orders');
  };
  const profileHandle = () => {
    setActive(3);
    props.navigation.push('profile');
  };
  const settingHandle = () => {
    setActive(4);
  };
  return (
    <View style={styles.bottomNavigationPostion}>
      <View style={styles.bottomSpaceArround}>
        <TouchableOpacity
          onPress={() => {
            homehandle();
          }}>
          <View style={styles.buttonCenter}>
            <Icon
              name={'home'}
              size={active === 1 ? 20 : 12}
              color={active === 1 ? '#26ae61' : 'rgb(211, 211, 211)'}
            />
            <Text
              style={
                active === 1
                  ? styles.bottomActiveColor
                  : styles.bottomInactiveColor
              }>
              DashBoard
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            orderHandle();
          }}>
          <View style={styles.buttonCenter}>
            <Icon
              name={'shopping-bag'}
              size={active === 2 ? 20 : 12}
              color={active === 2 ? '#26ae61' : 'rgb(211, 211, 211)'}
            />
            <Text
              style={
                active === 2
                  ? styles.bottomActiveColor
                  : styles.bottomInactiveColor
              }>
              Orders
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            profileHandle();
          }}>
          <View style={styles.buttonCenter}>
            <Icon
              name={'user'}
              size={active === 3 ? 20 : 12}
              color={active === 3 ? '#26ae61' : 'rgb(211, 211, 211)'}
            />
            <Text
              style={
                active === 3
                  ? styles.bottomActiveColor
                  : styles.bottomInactiveColor
              }>
              My Profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            settingHandle();
          }}>
          <View style={styles.buttonCenter}>
            <Icon
              name={'gear'}
              size={active === 4 ? 20 : 12}
              color={active === 4 ? '#26ae61' : 'rgb(211, 211, 211)'}
            />
            <Text
              style={
                active === 4
                  ? styles.bottomActiveColor
                  : styles.bottomInactiveColor
              }>
              Setting
            </Text>
          </View>
        </TouchableOpacity>
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
  bottomInactiveColor: {
    color: 'rgb(211, 211, 211)',
    fontSize: 12,
  },
  bottomActiveColor: {
    color: '#26ae61',
    fontSize: 12,
  },
});

export default BottomNavigationStack;
