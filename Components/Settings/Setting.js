import {StyleSheet, Text, View, ScrollView, Switch} from 'react-native';
import React, {useState} from 'react';
import HOC from '../HOC/HOC';
import {button} from '../CommonStyles/Index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Setting = () => {
  const [settingArray] = useState([
    {name: 'Active Status', icon: 'chevron-right'},
    {name: 'Notifications', icon: 'chevron-right'},
    {name: 'Dark Mode', icon: 'chevron-right'},
    {name: 'Report Problems', icon: 'chevron-right'},
    {name: 'Terms of services', icon: 'chevron-right'},
    {name: 'Payment methods', icon: 'chevron-right'},
    {name: 'Privacy Policy', icon: 'chevron-right'},
    {name: 'About us', icon: 'chevron-right'},
  ]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = row => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <ScrollView>
      <View style={{padding: 15, marginBottom: '7%'}}>
        {settingArray &&
          settingArray.map((row, index) => (
            <View key={index}>
              <View style={styles.settingborder}>
                <View style={button.commonSpaceBetween}>
                  <Text style={styles.settingLeftcontent}>{row.name}</Text>
                  <View>
                    {row.name === 'Active Status' ||
                    row.name === 'Notifications' ||
                    row.name === 'Dark Mode' ? (
                      <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                          toggleSwitch(row);
                        }}
                        value={isEnabled}
                      />
                    ) : (
                      <Icon name={row.icon} size={13} color="#333" />
                    )}
                  </View>
                </View>
              </View>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default HOC(Setting);

const styles = StyleSheet.create({
  settingborder: {
    borderColor: 'rgb(112,112,112)',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  settingLeftcontent: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
