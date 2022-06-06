import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const NotificationList = props => {
  const {data} = props;
  return (
    <ScrollView>
      <View style={styles.NotificationListmain}>
        {data &&
          data.map((row, index) => (
            <View style={styles.borderColor} key={index}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    source={require('./notificationImg.jpg')}
                    style={styles.imageWidth}
                  />
                </View>
                <View style={styles.rightContentset}>
                  <Text style={styles.orderNameColor}>{row.order}</Text>
                  <Text style={styles.orderDateColor}>{row.date}</Text>
                </View>
              </View>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default NotificationList;

const styles = StyleSheet.create({
  NotificationListmain: {
    padding: 15,
    marginBottom: '6%',
  },
  borderColor: {
    borderColor: 'rgb(112,112,112)',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  imageWidth: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  orderNameColor: {
    color: '#333',
    fontSize: 13,
    fontWeight: '500',
  },
  orderDateColor: {
    color: 'rgb(112,112,112)',
    fontSize: 11,
  },
  rightContentset: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
});
