import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {button} from '../CommonStyles/Index';
import HOC from '../HOC/HOC';
// import Header from '../HOC/Header';
import DashboardCard from './DashboardCard';

const DashBoard = () => {
  const [cardArray] = useState([
    {
      id: 1,
      value: '3',
      image: require('./Images/orderImg.jpg'),
      title: 'New Order',
    },

    {
      id: 2,
      value: '500',
      image: require('../../assets/Logo.png'),
      title: 'Active Orders',
    },
    {
      id: 3,
      value: '3',
      image: require('../../assets/Logo.png'),
      title: 'Deliverd Order',
    },
    {
      id: 4,
      value: '3',
      image: require('../../assets/Logo.png'),
      title: 'Total Order',
    },
    {
      id: 5,
      value: '30',
      image: require('../../assets/Logo.png'),
      title: 'Total Earning',
    },
    {
      id: 6,
      value: '3',
      image: require('../../assets/Logo.png'),
      title: 'Reviews',
    },
  ]);
  return (
    <View style={[{flexGrow: 1}, button.commonBackgroundColor]}>
      {/* bar section */}
      <View style={{padding: 10}}>
        <View>
          <Text>Bar Section</Text>
        </View>
        <View style={button.commonSpaceBetween}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.dateColor}>10/06/2020</Text>
          </View>
          <View>
            <Text style={styles.dayColorFont}>Monday</Text>
            <Text style={styles.dateColor}>11:30AM</Text>
          </View>
        </View>
      </View>
      {/* Card section */}
      <View style={styles.cardSectionBorder}>
        <FlatList
          data={cardArray}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-around',
            marginBottom: 5,
          }}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <DashboardCard data={item} />}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardSectionBorder: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    padding: 10,
    flexGrow: 1,
  },

  dateColor: {
    color: '#333',
    fontWeight: '600',
    fontSize: 13,
  },
  dayColorFont: {
    fontSize: 10,
    color: '#333',
    fontWeight: '500',
    textAlign: 'right',
  },
});
export default HOC(DashBoard);
