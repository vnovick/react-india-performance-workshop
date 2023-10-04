import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Easing} from 'react-native';
import {Text} from '@rneui/themed';

export const Header = () => {
  const [animatedValue] = useState(new Animated.Value(0));
  const colorValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(colorValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false, // Forced to set to false since backgroundColor is not supported
      }),
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = {
    opacity: animatedValue,
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ],
    backgroundColor: colorValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255, 0, 170)', 'rgb(48, 3, 42)'],
    }),
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.text}>Performance workshop</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, alignItems: 'center', backgroundColor: 'lightblue'},
  text: {fontSize: 24, fontWeight: 'bold', color: 'white'},
});
