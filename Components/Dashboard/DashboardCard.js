import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card, Icon} from 'react-native-elements';
import {Badge} from 'react-native-paper';
import {button} from '../CommonStyles/Index';

const DashboardCard = props => {
  const {title, value} = props;
  return (
    <Card containerStyle={styles.cardShadow}>
      {value && (
        <View>
          <Badge style={[styles.bagesColor, button.borderColor]}>{value}</Badge>
        </View>
      )}
      <View>
        <Icon name="rowing" />
      </View>
      {title && <Text style={styles.cardTitle}>{title}</Text>}
    </Card>
  );
};
const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    width: '40%',
  },
  cardTitle: {
    color: '#333',
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'center',
  },

  circleTextCenter: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#333',
  },

  bagesColor: {
    color: '#333',
    fontSize: 12,
    fontWeight: '800',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
});
export default DashboardCard;
