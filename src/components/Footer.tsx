import React from 'react';
import {View, Text} from 'react-native';

import {makeStyles} from '@rneui/themed';

export const Footer = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2023 Performance App</Text>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    bottom: 0,
    right: 0,
    width: '100%',
    backgroundColor: theme.colors.background,
    position: 'absolute',
  },
  image: {width: 500, height: 200}, // Large, non-optimized image
  text: {fontSize: 18},
}));
