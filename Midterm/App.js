import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text } from 'react-native-web';
import ItemGenerator from './components/ItemGenerator';
import ItemDisplay from './components/ItemDisplay';

export default function App() {
  return (
    <View style={styles.container}>
      <ItemDisplay/>
      <ItemGenerator/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
});
