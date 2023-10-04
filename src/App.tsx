import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './navigation/AppNavigator';
import {ThemeProvider, createTheme} from '@rneui/themed';

const theme = createTheme({
  darkColors: {
    primary: '#0971f1',
    secondary: '#f2f2f2',
  },
  components: {
    Button: {
      raised: true,
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
