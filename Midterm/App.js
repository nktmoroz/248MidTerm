import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text } from 'react-native-web';
import ItemGenerator from './components/ItemGenerator';
import ItemDisplay from './components/ItemDisplay';

export default function App() {

  const [GeneratedItem, setGeneratedItem] = useState();

  return (
    <View style={styles.container}>
      <ItemGenerator setGeneratedItem={setGeneratedItem}/>
      <ItemDisplay item={GeneratedItem}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
});
