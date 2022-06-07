import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';
import React from 'react';

const IntroRenderItem = props => {
  console.log('item', props);
  const {item} = props.item;

  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, width]}>
      <Image
        source={item.image}
        style={[styles.images, {width, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.3}}>
        <Text style={styles.titleColor}>{item.title}</Text>
        <Text style={styles.contentColor}>{item.content}</Text>
      </View>
    </View>
  );
};

export default IntroRenderItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    flex: 0.7,
    justifyContent: 'center',
  },
  titleColor: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  contentColor: {
    fontWeight: '300',
    color: 'rgb(112,112,112)',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
