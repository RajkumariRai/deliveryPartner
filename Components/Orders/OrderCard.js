import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const OrderCard = props => {
  const {data} = props;

  return (
    <View>
      <View style={styles.cardBorderPadding}>
        <View style={styles.flexSpace}>
          <View>
            <UserAvatar
              size={60}
              name={'Jhon Doe'}
              src={data.image}
              borderRadius={50}
              style={{zIndex: 999}}
            />
          </View>
          <View>
            <Text style={styles.orderIdColor}>{data.orderID}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.productColor}>{data.products}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.locationHeadingColor}>Location :</Text>
              <Text style={styles.locationdataColor}>{data.location}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name={'clock-o'}
              size={11}
              color="#d60e0e"
              style={styles.iconPadding}
            />
            <Text style={styles.timeColor}>{data.Time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBorderPadding: {
    borderColor: '#d60e0e',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 10,
    borderRightColor: '#d60e0e',
    borderRightWidth: 10,
  },
  flexSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderIdColor: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productColor: {
    fontSize: 10,
    color: 'rgb(211, 211, 211)',
    flexWrap: 'wrap',
    flex: 1,
  },
  locationHeadingColor: {
    fontSize: 10,
    fontWeight: '600',
    color: '#333',
  },
  locationdataColor: {
    fontSize: 10,
    color: '#rgb(211, 211, 211)',
    // flexWrap: 'wrap',
    // flex: 1,
  },
  timeColor: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 11,
    marginTop: -3,
    paddingLeft: 3,
  },
});
export default OrderCard;
