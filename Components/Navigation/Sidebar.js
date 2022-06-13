import {StyleSheet, Text, View, TouchableOpacity, Switch} from 'react-native';
import React, {useState} from 'react';
import {button} from '../CommonStyles/Index';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Sidebar = props => {
  const {navigation} = props;
  const [userInfoArray] = useState([
    {
      id: '1',
      icon: 'home',
      title: 'Dashboard',
      url: 'Dashboard',
    },
    {
      id: '2',
      icon: 'shopping-bag',
      title: 'Orders',
      url: 'Orders',
    },
    {
      id: '3',
      icon: 'bell',
      title: 'Notifications',
      url: 'Notifcation',
    },
    {
      id: '4',
      icon: 'history',
      title: 'History',
      url: '',
    },
  ]);
  const [applicationArray] = useState([
    {
      id: '1',
      icon: 'question-circle',
      title: 'Help & Support',
      url: '',
    },
    {
      id: '2',
      icon: 'gear',
      title: 'Settings',
      url: 'Setting',
    },
    {
      id: '3',
      icon: 'bell',
      title: 'Dark Mode',
      url: '',
    },
    {
      id: '4',
      icon: 'sign-out',
      title: 'Logout',
      url: 'Login',
    },
  ]);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = row => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <View style={[styles.container, button.commonBackgroundColor]}>
      <View style={styles.userDeatil}>
        <View style={{flexDirection: 'row'}}>
          <View style={{position: 'relative'}}>
            <UserAvatar
              size={90}
              name={'Rohit Kumar'}
              src={''}
              borderRadius={50}
            />
            <View style={styles.messageBorder}>
              <Icon name={'envelope'} size={12} style={button.commonColor} />
            </View>
          </View>
          <View style={styles.userInfoPadding}>
            <Text style={styles.userNameColor}>Rohit Kumar</Text>
            <Text style={styles.userEmailColor}>rohit@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.sidebarbottomBgColor}>
        {userInfoArray.map(row => (
          <TouchableOpacity
            onPress={() => {
              navigation.push(row.url);
            }}>
            <View style={styles.iconTitlepostion} key={row.id}>
              <Icon
                name={row.icon}
                size={14}
                style={[button.commonColor, styles.iconpostionset]}
              />
              <Text style={styles.titleColor}>{row.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View>
          <Text style={styles.applicationColor}>Application preferences</Text>
        </View>
        <View style={{paddingTop: 20}}>
          {applicationArray.map(row => (
            <TouchableOpacity
              onPress={() => {
                navigation.push(row.url);
              }}>
              <View style={button.commonSpaceBetween} key={row.id}>
                <View style={styles.iconTitlepostion}>
                  <Icon
                    name={row.icon}
                    size={14}
                    style={[button.commonColor, styles.iconpostionset]}
                  />
                  <Text style={styles.titleColor}>{row.title}</Text>
                </View>
                {row.title === 'Dark Mode' && (
                  <View>
                    <Switch
                      trackColor={{false: '#767577', true: '#767577'}}
                      thumbColor={
                        isEnabled
                          ? button.commonColor.color
                          : button.commonColor.color
                      }
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={() => {
                        toggleSwitch(row);
                      }}
                      value={isEnabled}
                    />
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: -4,
  },
  sidebarbottomBgColor: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '100%',
    paddingLeft: 15,
    paddingTop: 25,
  },
  userDeatil: {
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
  },
  messageBorder: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 5,
    position: 'absolute',
    bottom: 5,
    right: 0,
  },
  userInfoPadding: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  userNameColor: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '700',
  },
  userEmailColor: {
    color: '#fff',
  },
  iconTitlepostion: {
    flexDirection: 'row',
    paddingBottom: 20,
    paddingLeft: 10,
  },
  iconpostionset: {
    paddingTop: 4,
  },
  titleColor: {
    color: '#333',
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  applicationColor: {
    color: '#333',
    fontSize: 12,
    fontWeight: '500',
  },
});
