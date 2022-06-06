import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {button} from '../CommonStyles/Index';
import HOC from '../HOC/HOC';
// import Header from '../HOC/Header';
import DashboardCard from './DashboardCard';

const DashBoard = () => {
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
        <ScrollView>
          <View style={styles.flexSpace}>
            <DashboardCard title={'New Order'} value={'3'} />
            <DashboardCard title={'Active Orders'} value={'500'} />
          </View>
          <View style={styles.flexSpace}>
            <DashboardCard title={'Deliverd Order'} value={'15'} />
            <DashboardCard title={'Total Order'} value={'30'} />
          </View>
          <View style={styles.flexSpace}>
            <DashboardCard title={'Total Earning'} />
            <DashboardCard title={'Reviews'} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardSectionBorder: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    height: '100%',
  },
  flexSpace: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
