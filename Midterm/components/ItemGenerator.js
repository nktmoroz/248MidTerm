import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ItemGenerator = ({setGeneratedItem}) => {

    const [item, setItem] = useState({Type: 'Sword', Rarity: 'Common', Stat: 'Attack', StatValue: 1});

    const generateItem = () => {

        typeRoll = Math.floor((Math.random()) * 4);
        type = '';
        switch(typeRoll){
            case 0:
                type = 'Sword'
                break;
            case 1:
                type = 'Helmet'
                break;
            case 2:
                type = 'Chestpiece'
                break;
            case 3:
                type = 'Gloves'
                break;
        };

        rarityRoll = Math.floor((Math.random()) * 3);
        rarity = '';

        switch(Math.floor(rarityRoll)){
            case 0:
                rarity = 'Common'
                break;
            case 1:
                rarity = 'Rare'
                break;
            case 2:
                rarity = 'Legendary'
                break;
        };
        stat = '';
        if(typeRoll == 0){
            stat = 'Attack'
        }else {
            stat = 'Defense'
        }

        statValue = Math.floor(Math.random() * (Math.pow(5,rarityRoll + 1) - Math.pow(5,rarityRoll)) + Math.pow(5,rarityRoll));
        
        setItem((prevItem) => ({...prevItem, Type: type, Rarity: rarity, Stat: stat, StatValue: statValue}));
        setGeneratedItem(item);
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={generateItem}> 
                <Text style= {styles.buttonText}> Open the Treasure Chest </Text>
            </TouchableOpacity>
        </View>
    );

};

const styles= StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },

    buttonText: {
        fontSize: 40,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: 'white'
    },

    button: {
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'black',
    }
});

export default ItemGenerator;