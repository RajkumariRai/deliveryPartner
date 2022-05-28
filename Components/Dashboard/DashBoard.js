import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import Header from '../Header/Header';
import DashboardCard from './DashboardCard';

const DashBoard = () => {
  return (
    <SafeAreaView>
      <Header leftIcon={'bars'} tilte={'Dashboard'} rightIcon={'bell'} />
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
              <DashboardCard title={'Active Orders'} value={'5'} />
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
  },
  cardSectionBorder: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    padding: 20,
  },
  flexSpace: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default DashBoard;
