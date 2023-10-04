import {makeStyles} from '@rneui/themed';
import React, {useState} from 'react';
import {Text, TextInput, SafeAreaView} from 'react-native';

export const InputExampleScreen = () => {
  const [value, setValue] = useState('');

  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={setValue}
      />
      <Text>{value}</Text>
    </SafeAreaView>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
}));
