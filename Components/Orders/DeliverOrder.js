import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {button} from '../CommonStyles/Index';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const DeliverOrder = () => {
  const [newOrderArray] = useState([
    {
      orderID: 'ORD3423423-COD',
      Time: '11.30 AM',
      products: 'Deal1,burger & 7up regular 250ml',
      location: '11/B vesu surat 24234234',
      image:
        'https://us.123rf.com/450wm/rmarmion/rmarmion1402/rmarmion140200019/26326734-businesswoman-working-at-her-office-by-herself.jpg?ver=6',
    },
    {
      orderID: 'ORD3423423-Online',
      Time: '11.30 AM',
      products:
        'Deal1,burger & 7up regular 250ml Deal1,burger & 7up regular 250ml',
      location: '11/B vesu surat 24234234',
      image:
        'https://us.123rf.com/450wm/rmarmion/rmarmion1402/rmarmion140200019/26326734-businesswoman-working-at-her-office-by-herself.jpg?ver=6',
    },
    {
      orderID: 'ORD3423423',
      Time: '11.30 AM',
      products: 'Deal1,burger & 7up regular 250ml',
      location: '11/B vesu surat 24234234',
      image: '',
    },
    {
      orderID: 'ORD3423423',
      Time: '11.30 AM',
      products: 'Deal1,burger & 7up regular 250ml',
      location: '11/B vesu surat 24234234',
      image:
        'https://us.123rf.com/450wm/rmarmion/rmarmion1402/rmarmion140200019/26326734-businesswoman-working-at-her-office-by-herself.jpg?ver=6',
    },
    {
      orderID: 'ORD3423423',
      Time: '11.30 AM',
      products: 'Deal1,burger & 7up regular 250ml',
      location: '11/B vesu surat 24234234 ',
      image: '',
    },
    {
      orderID: 'ORD3423423',
      Time: '11.30 AM',
      products: 'Deal1,burger & 7up regular 250ml',
      location: '11/B vesu surat 24234234',
      image: '',
    },
  ]);

  return (
    <ScrollView>
      <View style={styles.srceenMargin}>
        <View style={styles.cardBorderPaddin}>
          <View style={button.commonSpaceBetween}>
            <View>
              <Text style={styles.productColor}>Deliverd Order :1</Text>
              <Text style={styles.productColor}>Return Order :1</Text>
              <Text style={[styles.collectAmountColor, {paddingTop: 10}]}>
                Total Order :2
              </Text>
            </View>
            <View style={styles.collectcenter}>
              <Text style={styles.collectAmountColor}>Collect Rs. 250/-</Text>
            </View>
          </View>
        </View>
        {newOrderArray &&
          newOrderArray.map((row, index) => (
            <View key={index}>
              <View style={styles.cardBorderPaddin}>
                <TouchableOpacity
                  onPress={() => {
                    deliverdCheckOrderHandle(row, index);
                  }}>
                  <View style={button.commonSpaceBetween}>
                    <View>
                      <UserAvatar
                        size={60}
                        name={'Jhon Doe'}
                        src={row.image}
                        borderRadius={50}
                        style={{zIndex: 999}}
                      />
                    </View>
                    <View>
                      <Text style={styles.orderIdColor}>{row.orderID}</Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.productColor}>{row.products}</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.locationHeadingColor}>
                          Location :
                        </Text>
                        <Text style={styles.locationdataColor}>
                          {row.location}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <Icon
                          name={'clock-o'}
                          size={11}
                          style={button.commonColor}
                        />
                        <Text style={styles.timeColor}>{row.Time}</Text>
                      </View>
                      <View
                        style={{
                          alignItems: 'flex-end',
                          flex: 1,
                          justifyContent: 'center',
                        }}>
                        <View
                          style={[
                            button.commonBackgroundColor,
                            styles.deliverdbuttobColor,
                          ]}>
                          <Text style={styles.deliverdTextColor}>Deliverd</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default DeliverOrder;

const styles = StyleSheet.create({
  srceenMargin: {
    marginTop: 10,
    marginBottom: '15%',
  },
  cardBorderPaddin: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderColor: 'rgb(211, 211, 211)',
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
  deliverdbuttobColor: {
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    paddingTop: 2,
  },
  deliverdTextColor: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
  },
  collectAmountColor: {
    color: '#333',
    fontSize: 12,
    fontWeight: 'bold',
  },
  collectcenter: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
