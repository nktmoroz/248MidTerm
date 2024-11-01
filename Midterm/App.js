import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Open up App.js to start working on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
});
