import React, {useEffect, useState} from 'react';
import {Animated, Image, ImageSourcePropType, StyleSheet} from 'react-native';
export const WelcomeSection = ({
  imageSource,
}: {
  imageSource: ImageSourcePropType;
}) => {
  const [anim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: 5,
          duration: 5000,
          useNativeDriver: false,
        }),
        Animated.timing(anim, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [anim]);

  const animatedStyle = {
    transform: [
      {
        translateX: anim,
      },
      {
        scale: anim.interpolate({
          // Adding scaling
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ],
  };

  return (
    <Animated.View style={[styles.container, animatedStyle, {opacity: anim}]}>
      <Image source={imageSource} style={styles.image} />
    </Animated.View>
  );
};

// useEffect(() => {
//   const intervalId = setInterval(() => {
//     // Some expensive calculation
//     const largeArray = new Array(1000000).fill(0).map(() => Math.random());
//     const sum = largeArray.reduce((acc, val) => acc + val, 0);
//     console.log(sum); // Prevent the calculation from being stripped out by minification
//   }, 16); // Running every frame

//   return () => clearInterval(intervalId);
// }, []);

const styles = StyleSheet.create({
  container: {alignItems: 'center', padding: 10},
  image: {width: '100%', height: 400},
});
