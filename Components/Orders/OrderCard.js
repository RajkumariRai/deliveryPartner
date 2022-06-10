import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {button} from '../CommonStyles/Index';

const OrderCard = props => {
  const {data, Active} = props;

  return (
    <View>
      <View style={[styles.cardBorderPadding, button.orderCardBorder]}>
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
          <View>
            <View style={{flexDirection: 'row'}}>
              <Icon name={'clock-o'} size={11} style={button.commonColor} />
              <Text style={styles.timeColor}>{data.Time}</Text>
            </View>

            {Active && (
              <View style={styles.activeRight}>
                <Text style={styles.onlineActive}></Text>
              </View>
            )}
          </View>
          <View style={styles.trinaglePostionset}>
            <View style={styles.tirngleColor}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBorderPadding: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
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
  },
  timeColor: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 11,
    marginTop: -3,
    paddingLeft: 3,
  },
  onlineActive: {
    width: 10,
    height: 10,
    backgroundColor: 'green',
    borderRadius: 50,
    alignItems: 'flex-end',
  },
  activeRight: {
    alignItems: 'flex-end',
    paddingTop: 15,
  },
  tirngleColor: {
    borderTopWidth: 9,
    borderRightWidth: 0,
    borderBottomWidth: 9,
    borderLeftWidth: 9,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#fff',
  },
  trinaglePostionset: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    marginRight: -17,
  },
});
export default OrderCard;
