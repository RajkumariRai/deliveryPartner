import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import HOC from '../HOC/HOC';
// import Header from '../HOC/Header';
import DashboardCard from './DashboardCard';

const DashBoard = () => {
  return (
    <SafeAreaView>
      {/* <Header leftIcon={'bars'} tilte={'Dashboard'} rightIcon={'bell'} /> */}
      <View style={styles.dashboardbgcolor}>
        {/* bar section */}
        <View>
          <Text>Bar Section</Text>
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  dashboardbgcolor: {
    backgroundColor: '#26ae61',
    height: '100%',
  },
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
});
export default HOC(DashBoard);
