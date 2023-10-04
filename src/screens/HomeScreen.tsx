import React from 'react';
import {ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {
  Header,
  WelcomeSection,
  MenuTiles,
  NewsFeed,
  Footer,
} from '../components';
import {Avatar, makeStyles} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

export type THomeScreenProps = {};

export const HomeScreen: React.FC<THomeScreenProps> = () => {
  const styles = useStyles();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); // Instantiate navigation

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.avatar}
        onPress={() => navigation.navigate('Profile')}>
        <Avatar
          size={120}
          rounded
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1202192942351474688/km9_Xd3Q_400x400.jpg',
          }}
        />
      </TouchableOpacity>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <WelcomeSection imageSource={require('../assets/goa-ai.png')} />
        <MenuTiles />
        <NewsFeed />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.background,
    paddingBottom: 100,
  },
  avatar: {
    position: 'absolute',
    zIndex: 1,
    top: 80,
  },
}));
