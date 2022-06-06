import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {button} from '../CommonStyles/Index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const FliterCompletedOrder = props => {
  const {navigation} = props;
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
    paddingTop:5
  },
});
