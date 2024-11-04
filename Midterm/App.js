import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text } from 'react-native-web';
import ItemGenerator from './components/ItemGenerator';
import ItemDisplay from './components/ItemDisplay';
import ItemSalvage from './components/itemSalvage';
import EquipDisplay from './components/equipDisplay';
import Equip from './components/equip';

export default function App() {

  const [GeneratedItem, setGeneratedItem] = useState({Type: '?', Rarity: '?', Stat: '?', StatValue: '?'});
  const [EquippedSword, setEquippedSword] = useState({Rarity: 'Common', StatValue: 0});
  const [EquippedHelmet, setEquippedHelmet] = useState({Rarity: 'Common', StatValue: 0});
  const [EquippedChestpiece, setEquippedChestpiece] = useState({Rarity: 'Common', StatValue: 0});
  const [EquippedGloves, setEquippedGloves] = useState({Rarity: 'Common', StatValue: 0});

  return (
    <View style={styles.container}>
      <ItemDisplay item={GeneratedItem}/>
      <ItemGenerator setGeneratedItem={setGeneratedItem}/>
      <EquipDisplay sword={EquippedSword} helmet={EquippedHelmet} chespiece={EquippedChestpiece} gloves={EquippedGloves}/>
      <Equip item={GeneratedItem} resetItem={setGeneratedItem} setSword={setEquippedSword} setHelmet={setEquippedHelmet} setChestpiece={setEquippedChestpiece} setGloves={setEquippedGloves}/>
      <ItemSalvage rarity={GeneratedItem.Rarity} resetItem={setGeneratedItem}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8',
  },
});
