import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TUser} from './UserProfileExtended';

export const UserProfile = () => {
  const [userData, setUserData] = useState<TUser | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/1',
          {signal: controller.signal},
        );
        const user = await response.json();
        setUserData(user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      // Forgetting to call controller.abort() here will lead to potential memory leak
      // Especially if the component gets unmounted before the fetch completes
      // Uncommenting the line below fixes the leak
      // controller.abort();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{userData ? userData.name : 'Loading...'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 10},
  text: {fontSize: 24, fontWeight: 'bold'},
});
