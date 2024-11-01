import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text } from 'react-native-web';
import ItemGenerator from './components/ItemGenerator';

export default function App() {
  return (
    <View style={styles.container}>
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
