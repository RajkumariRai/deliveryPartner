import {StyleSheet, View, FlatList, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import {button} from '../CommonStyles/Index';
import ImageSlides from './ImageSlides';
import IntroRenderItem from './IntroRenderItem';

const IntroSlide = () => {
  const srollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={[styles.inrtomainView, button.commonBackgroundColor]}>
      <View style={styles.introBgColor}>
        <View>
          <FlatList
            data={ImageSlides}
            renderItem={item => <IntroRenderItem item={item} />}
            // horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            eyExtractor={item => item.id}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: srollX}}}],
              {useNaitveDriver: false},
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default IntroSlide;

const styles = StyleSheet.create({
  inrtomainView: {
    flexGrow: 1,
  },
  introBgColor: {
    backgroundColor: '#fff',
    padding: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: '80%',
  },
});
