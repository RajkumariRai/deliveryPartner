import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

const NewOrder = () => {
  const [newOrderArray, setnewOrderArray] = useState([
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
      location: '11/B vesu surat 24234234',
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
      <View>
        {newOrderArray &&
          newOrderArray.map((row, index) => (
            <View style={styles.cardBorderPadding} key={index}>
              <View style={styles.flexSpace}>
                <View></View>
                <View></View>
                <View></View>
              </View>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardBorderPadding: {
    borderColor: 'rgb(211, 211, 211)',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 10,
  },
  flexSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default NewOrder;
