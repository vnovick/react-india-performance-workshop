import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Footer, ItemDetails, WelcomeSection} from '../components';
import {RootStackParamList} from '../navigation/AppNavigator';
import {RouteProp} from '@react-navigation/native';

export type TDetailsScreenProps = {
  route: RouteProp<RootStackParamList, 'Details'>;
};

export const DetailsScreen: React.FC<TDetailsScreenProps> = ({route}) => {
  const {postId} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeSection imageSource={require('../assets/goa-large-image.jpeg')} />
      <View style={styles.box}>
        <ItemDetails postId={postId} />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Adjust background color as needed
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 16,
    // Add other styling as needed
  },
  box: {
    padding: 16,
  },
  image: {
    width: '100%', // Set as needed
    height: 200, // Set as needed
    // Intentionally avoid using resizeMode for initial non-optimized version
  },
  description: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    paddingHorizontal: 16,
    // Add other styling as needed
  },
});
