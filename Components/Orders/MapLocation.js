import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {button} from '../CommonStyles/Index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import MapView from 'react-native-maps';
import {Button} from 'react-native-paper';
import UserAvatar from 'react-native-user-avatar';

const MapLocation = props => {
  const {navigation} = props;
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const onRegionChange = regionValue => {
    setRegion(regionValue);
  };
  return (
    <View style={styles.mapMainView}>
      <View style={[button.commonBackgroundColor]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={styles.timesBgColor}>
            <Icon name={'times'} size={11} style={button.commonColor} />
          </View>
        </TouchableOpacity>
      </View>
      {/* map section */}
      <View>
        {/* <MapView region={region} onRegionChange={onRegionChange} /> */}
      </View>
      <View style={styles.mapLocationPostion}>
        <View style={styles.borderCard}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <UserAvatar
                size={45}
                name={'Doe Jhon'}
                src={''}
                borderRadius={50}
                style={{zIndex: 999}}
              />
            </View>
            <View style={{paddingLeft: 10, flex: 1, justifyContent: 'center'}}>
              <Text style={styles.userNamefont}>Vishal Mistry</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.locationHeadingColor}>Location :</Text>
                <Text style={styles.locationdataColor}>
                  11/B, vesu Nagar ,22222
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Button
            mode="contained"
            style={button.commonButton}
            onPress={() => {
              //   StartOrderHandle();
            }}>
            Finish
          </Button>
        </View>
      </View>
    </View>
  );
};

export default MapLocation;

const styles = StyleSheet.create({
  mapMainView: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  timesBgColor: {
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 50,
    width: 15,
    margin: 5,
  },
  mapLocationPostion: {
    position: 'absolute',
    bottom: 0,
    paddingRight: 10,
    paddingBottom: 10,
    width: '100%',
  },
  borderCard: {
    borderColor: 'rgb(112,112,112)',
    borderWidth: 1,
    margin: 5,
    padding: 5,
  },
  locationHeadingColor: {
    fontSize: 10,
    fontWeight: '600',
    color: '#333',
  },

  locationdataColor: {
    fontSize: 10,
    color: '#rgb(211, 211, 211)',
  },
  userNamefont: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 11,
  },
});
