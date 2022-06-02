import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import OrderCard from './OrderCard';

const NewOrder = props => {
  console.log('props=====', props);
  const {navigation} = props;
  const [newOrderArray] = useState([
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

  const OrderHandle = () => {
    navigation.push('OrdersAccpectReject');
  };

  return (
    <>
      <ScrollView>
        <View style={styles.srceenMargin}>
          {newOrderArray &&
            newOrderArray.map((row, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    OrderHandle();
                  }}>
                  <OrderCard data={row} />
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  srceenMargin: {
    marginTop: 10,
    marginBottom: '15%',
  },
});

export default NewOrder;
