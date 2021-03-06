import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {button} from '../CommonStyles/Index';
import {useNavigation} from '@react-navigation/native';
import {Badge} from 'react-native-paper';

const Header = props => {
  const {route, navigation} = props;

  const [notificationCount, setNotificationCount] = useState(80);

  const notificationHandle = () => {
    navigation.push('Notifcation');
  };

  return (
    <View style={[button.commonBackgroundColor, {padding: 10}]}>
      {/* dashboard Header  */}
      {route.name === 'Dashboard' && (
        <View style={styles.flexSpace}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Icon name={'bars'} size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.titleColor}>Dashboard</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                notificationHandle();
              }}>
              <View style={{position: 'relative'}}>
                <Badge style={[styles.bagespostionSet, button.commonColor]}>
                  {notificationCount}
                </Badge>
                <Icon
                  name={'bell'}
                  size={20}
                  color="#fff"
                  style={styles.notiIConset}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* profile header */}
      {route.name === 'profile' && (
        <View style={styles.flexSpace}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'arrow-left'} size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.titleColor}>My Profile</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.push('edit-Profile');
              }}>
              <Icon name={'edit'} size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* Edit profile header */}
      {route.name === 'edit-Profile' && (
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'arrow-left'} size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={{width: '100%'}}>
            <Text style={[styles.titleColor, {textAlign: 'center'}]}>
              Edit Profile
            </Text>
          </View>
        </View>
      )}
      {/* order header */}
      {route.name === 'Orders' && (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'arrow-left'} size={16} color="#fff" />
            </TouchableOpacity>
            <Text style={[styles.titleColor, {paddingLeft: 10}]}>Order</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                notificationHandle();
              }}>
              <View style={{position: 'relative'}}>
                <Badge style={[styles.bagespostionSet, button.commonColor]}>
                  {notificationCount}
                </Badge>
                <Icon
                  name={'bell'}
                  size={20}
                  color="#fff"
                  style={styles.notiIConset}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {route.name === 'Setting' && (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon
                name={'bars'}
                size={16}
                color="#fff"
                style={{paddingTop: 3}}
              />
            </TouchableOpacity>
            <Text style={[styles.titleColor, {paddingLeft: 10}]}>Setting</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                notificationHandle();
              }}>
              <View style={{position: 'relative'}}>
                <Badge style={[styles.bagespostionSet, button.commonColor]}>
                  {notificationCount}
                </Badge>
                <Icon
                  name={'bell'}
                  size={20}
                  color="#fff"
                  style={styles.notiIConset}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  flexSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleColor: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bagespostionSet: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
    zIndex: 999,
  },
  notiIConset: {
    position: 'absolute',
    left: -10,
    bottom: -10,
  },
});
export default Header;
