import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Card, Icon} from 'react-native-elements';
import {Badge} from 'react-native-paper';
import {button} from '../CommonStyles/Index';

const DashboardCard = props => {
  const {data} = props;
  return (
    <Card containerStyle={styles.cardShadow}>
      {data.value && (
        <View>
          <Badge style={[styles.bagesColor, button.borderColor]}>
            {data.value}
          </Badge>
        </View>
      )}
      <View style={{alignItems: 'center'}}>
        {data.image && <Image source={data.image} style={styles.imageWidth} />}
      </View>
      {data.title && <Text style={styles.cardTitle}>{data.title}</Text>}
    </Card>
  );
};
const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: button.commonColor.color,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '40%',
    borderRadius: 10,
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
  imageWidth: {
    width: 30,
    height: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
});
export default DashboardCard;
