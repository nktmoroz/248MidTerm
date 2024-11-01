import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text } from 'react-native-web';
import ItemGenerator from './components/ItemGenerator';
import ItemDisplay from './components/ItemDisplay';

export default function App() {

  const [GeneratedItem, setGeneratedItem] = useState({Type: 'Sword', Rarity: 'Common', Stat: 'Attack', StatValue: 1});

  return (
    <View style={styles.container}>
      <ItemDisplay item={GeneratedItem}/>
      <ItemGenerator setGeneratedItem={setGeneratedItem}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8',
  },
});
