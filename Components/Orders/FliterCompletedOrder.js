import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {button} from '../CommonStyles/Index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const FliterCompletedOrder = props => {
  const {navigation} = props;
  const [fliterArray] = useState([
    {day: 'Custom'},
    {day: 'Today'},
    {day: 'Yesterday'},
    {day: 'Last 7 Days'},
    {day: 'Last 14 Days'},
    {day: 'Last 30 Days'},
    {day: 'Last 3 Months'},
    {day: 'Last 6 Months'},
  ]);
  const [active, setActive] = useState(false);

  const checkOrderHandle = row => {
    setActive(!active);
  };
  return (
    <View styles={styles.fliterMainView}>
      <View style={[button.commonBackgroundColor]}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <View style={styles.timesBgColor}>
              <Icon name={'times'} size={11} style={button.commonColor} />
            </View>
          </TouchableOpacity>
          <Text style={styles.fliterColorFont}>Fliter</Text>
        </View>
      </View>
      <View style={{paddingTop: 15}}>
        {fliterArray &&
          fliterArray.map((row, index) => (
            <View style={styles.daysBorder} key={index}>
              <TouchableOpacity
                onPress={() => {
                  checkOrderHandle(row);
                }}>
                <View style={button.commonSpaceBetween}>
                  <Text style={styles.dayColorFont}>{row.day}</Text>
                  {active && (
                    <Icon name={'check'} size={11} style={button.commonColor} />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </View>
  );
};

export default FliterCompletedOrder;

const styles = StyleSheet.create({
  fliterMainView: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  timesBgColor: {
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 50,
    width: 15,
    margin: 5,
  },
  fliterColorFont: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    paddingLeft: 5,
    paddingTop: 5,
  },
  daysBorder: {
    borderBottomColor: 'rgb(112,112,112)',
    borderBottomWidth: 1,
    padding: 10,
  },
  dayColorFont: {
    color: '#333',
    fontSize: 12,
    fontWeight: '500',
  },
});
