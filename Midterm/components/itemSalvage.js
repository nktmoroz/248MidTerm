import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ItemSalvage = ({rarity, resetItem}) => {

const [treasureParts = 0, setTreasureParts] = useState ();

const salvageItem = () => {
    switch(rarity) {
        case 'Common':
            setTreasureParts(treasureParts+1)
            break;
        case 'Rare':
            setTreasureParts(treasureParts+10)
            break;
        case 'Legendary':
            setTreasureParts(treasureParts+100)
            break;
    }
    resetItem((prevItem) => ({...prevItem, Type: '?', Rarity: '?', Stat: "?", StatValue: '?'}));
}

    return(
        <View style={styles.container}>
            <hr style={{height: 1, color: 'black', width: '100%'}}/>
            <View style={styles.container}><Text style={styles.partsText}>Treasure Parts: {treasureParts}</Text></View>
            <TouchableOpacity style={styles.button} onPress={salvageItem}> 
                <Text style= {styles.buttonText}> Salvage </Text>
            </TouchableOpacity>
        </View>
    );

};

const styles= StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        paddingtop: 20,
    },

    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: 'white'
    },

    button: {
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        backgroundColor: 'black',
    },

    partsText: {
        fontSize: 25,
        fontWeight: 'bold',
    }
});

export default ItemSalvage;