import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

type TAdress = {
  street: string;
  suite: string;
  city: string;
};

type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type TUser = {
  name: string;
  address: TAdress;
  company: TCompany;
};

export const UserProfileExtended = () => {
  const [user, setUser] = useState<TUser | null>(null);
  const [extraInfo, setExtraInfo] = useState<{
    address: TAdress;
    company: TCompany;
  } | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => setUser(json));
  }, []);

  const handleFetchExtraInfo = () => {
    if (extraInfo) {
      setExtraInfo(null);
      return;
    }
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json =>
        setExtraInfo({
          address: json.address,
          company: json.company,
        }),
      );

    // Fetching additional information and setting state causes the whole component to re-render
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user?.name}</Text>
      <View style={styles.container}>
        {extraInfo ? (
          <>
            <View style={styles.container}>
              <Text>{extraInfo.address.street}</Text>
              <Text>{extraInfo.address.suite}</Text>
              <Text>{extraInfo.address.city}</Text>
            </View>
            <View style={styles.container}>
              <Text>{extraInfo.company.name}</Text>
              <Text>{extraInfo.company.catchPhrase}</Text>
              <Text>{extraInfo.company.bs}</Text>
            </View>
          </>
        ) : (
          <Text style={styles.text}>No extra info loaded</Text>
        )}
      </View>
      <Button
        title={`${extraInfo ? 'Hide' : 'Show'} extra info`}
        onPress={handleFetchExtraInfo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 10},
  text: {fontSize: 20, marginVertical: 5},
});

//Solutions:
// Avoid Data Fetch: The data is only fetched once. The extra information is derived from the already available user state.
// Conditional Rendering with useMemo: The ExtraInfo component is conditionally rendered using useMemo which will only recompute when showExtraInfo or user state changes.
