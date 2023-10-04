import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {UserPosts, UserProfileExtended} from '../components';
import {Footer} from '../components';
import {makeStyles} from '@rneui/themed';

export type TProfileScreenProps = {};

export const ProfileScreen: React.FC<TProfileScreenProps> = () => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <UserProfile /> */}
        <UserProfileExtended />
        <UserPosts />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.background,
  },
}));
