import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/HomeScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {SimpleExampleScreen} from '../screens/SimpleExampleScreen';
import {InputExampleScreen} from '../screens/InputExampleScreen';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Details: {postId: string};
  SimpleExample: undefined;
  InputExampleScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      {/* These screens are not for exercise purposes */}
      <Stack.Screen name="SimpleExample" component={SimpleExampleScreen} />
      <Stack.Screen name="InputExampleScreen" component={InputExampleScreen} />
    </Stack.Navigator>
  );
};
