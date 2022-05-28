import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

const DashboardCard = props => {
  const {title, value} = props;
  return (
    <Card  containerStyle={styles.cardShadow}>
      {value && (
        <View style={styles.topLeftValue}>
          <Text>{value}</Text>
        </View>
      )}

      {title && <Text style={styles.cardTitle}>{title}</Text>}
    </Card>
  );
};
const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
  },
  cardTitle: {
    color: '#333',
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'center',
  },
  topLeftValue: {
    borderRadius: 50,
    borderColor: '#333',
    borderWidth: 1,
    width: '20%',
  },
});
export default DashboardCard;
