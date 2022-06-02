import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HOC from '../HOC/HOC';
import NewOrder from './NewOrder';
import {TabView, TabBar} from 'react-native-tab-view';

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
      // case 'Created':
      //   return <TCreatedAssignment navigation={navigation} />;
      // case 'ReviewPendingAssignment':
      //   return <ReviewPendingAssignment navigation={navigation} />;
      // case 'Completed':
      //   return <TCompletedAssignment navigation={navigation} />;
      // case 'Assigned':
      //   return <TAssignedAssignment navigation={navigation} />;

      default:
        return null;
    }
  };
  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: '#0c0c0c',
            fontSize: 12,
            fontWeight: 'bold',
            margin: -5,
          }}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{
        backgroundColor: '#fff',
        height: '100%',
        borderBottomColor: '#0070bb',
        borderBottomWidth: 2,
        shadowColor: '#000',
      }}
      style={{
        backgroundColor: '#fff',
      }}
      tabStyle={{paddingRight: -10}}
      pressOpacity={30}
    />
  );
  return (
    <View style={{flexGrow: 1, backgroundColor: '#fff'}}>
      {/* <NewOrder /> */}
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default HOC(Orders);
