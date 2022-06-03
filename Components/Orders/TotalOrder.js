import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {button} from '../CommonStyles/Index';
import {TextInput} from 'react-native-paper';

const TotalOrder = props => {
  const {navigation} = props;
  const completeOrderHandle = () => {
    navigation.push('OrdersAccpectReject', 'Completed');
  };
  return (
    <ScrollView>
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '90%'}}>
            <Text style={styles.orderCompleted}>Order Completed</Text>
            <TextInput
              style={styles.textinputSearch}
              theme={{roundness: 50}}
              // left={<TextInput.Icon name="database-search" />}
              mode="outlined"
              placeholder="Search"
              placeholderTextColor="#000"
              //   onChangeText={password => {
              //     setPassword(password);
              //     setpasswordError(false);
              //   }}
            />
          </View>
          <View style={styles.filtericonset}>
            <Icon name={'filter'} size={25} style={button.commonColor} />
          </View>
        </View>
        {/* card section */}
        <View style={{paddingTop: 10}}>
          {/* map section */}
          <TouchableOpacity
            onPress={() => {
              completeOrderHandle();
            }}>
            <View style={styles.cardBorder}>
              <Text style={[button.commonColor, styles.orderIdfont]}>
                ORD123456789 -Completed
              </Text>
              <Text style={styles.amountColor}>Rs. 520/-</Text>
              <View style={styles.flexPadding}>
                <Text style={styles.datetimeColor}>
                  nove 20,2021{' '}
                  <Icon name={'clock-o'} size={12} style={button.commonColor} />{' '}
                  11:30AM
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default TotalOrder;

const styles = StyleSheet.create({
  filtericonset: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  textinputSearch: {
    height: 30,
    backgroundColor: '#fff',
  },
  orderCompleted: {
    color: '#333',
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 10,
  },
  cardBorder: {
    borderBottomColor: 'rgb(112,112,112)',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 15,
  },
  orderIdfont: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  amountColor: {
    fontWeight: '500',
    fontSize: 16,
    color: '#333',
  },
  flexPadding: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  datetimeColor: {
    color: '#333',
    fontSize: 12,
  },
});
