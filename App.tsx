import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/nevigation/AppNevigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
