import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Footer} from '../components';
import {makeStyles} from '@rneui/themed';

export const SimpleExampleScreen = () => {
  const styles = useStyles();
  const [_value, setValue] = useState('initial value');

  useEffect(() => {
    setTimeout(() => {
      setValue('update 1');
    }, 3000);

    setTimeout(() => {
      setValue('update 2');
    }, 5000);
  }, []);

  // Profiler API:
  // https://react.dev/reference/react/Profiler
  // function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  //   // Aggregate or log render timings...
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SampleView />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const SampleView = () => (
  <View style={{height: 200, width: '100%', backgroundColor: 'purple'}} />
);

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.background,
  },
}));
