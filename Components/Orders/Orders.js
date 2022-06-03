import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HOC from '../HOC/HOC';
import NewOrder from './NewOrder';
import {TabView, TabBar} from 'react-native-tab-view';
import ActiveOrder from './ActiveOrder';
import {button} from '../CommonStyles/Index';
import DeliverOrder from './DeliverOrder';
import TotalOrder from './TotalOrder';

const Orders = props => {
  const {navigation} = props;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'New', title: 'New'},
    {key: 'Active', title: 'Active'},
    {key: 'Deliverd', title: 'Deliverd'},
    {key: 'Total', title: 'Total'},
  ]);
  const renderScene = ({route}) => {
    switch (route.key) {
      case 'New':
        return <NewOrder navigation={navigation} />;
      case 'Active':
        return <ActiveOrder navigation={navigation} />;
      case 'Deliverd':
        return <DeliverOrder navigation={navigation} />;
      case 'Total':
        return <TotalOrder navigation={navigation} />;
      default:
        return null;
    }
  };
  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, focused, color}) => (
        <Text
          style={
            focused === true
              ? [styles.tabViewColor, button.commonColor]
              : styles.inactiveTab
          }>
          {route.title}
        </Text>
      )}
      indicatorStyle={[
        button.tabBorderBottom,
        {
          backgroundColor: '#fff',
          height: '100%',
          borderBottomWidth: 2,
          shadowColor: '#000',
        },
      ]}
      style={{
        backgroundColor: '#fff',
      }}
      tabStyle={{paddingRight: -10}}
      pressOpacity={30}
    />
  );
  return (
    <View style={{flexGrow: 1, backgroundColor: '#fff'}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  tabViewColor: {
    fontSize: 12,
    fontWeight: 'bold',
    margin: -5,
  },
  inactiveTab: {
    color: 'rgb(211, 211, 211)',
    fontSize: 12,
    fontWeight: 'bold',
    margin: -5,
  },
});
export default HOC(Orders);
