import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet} from 'react-native';

const equip = ({item, resetItem, setSword, setHelmet, setChestpiece, setGloves}) => {

    const equipItem = () => {
        switch(item.Type) {
            case 'Sword':
                setSword(item)
                resetItem((prevItem) => ({...prevItem, Type: '?', Rarity: '?', Stat: "?", StatValue: '?'}));
                break;
            case 'Helmet':
                setHelmet(item)
                resetItem((prevItem) => ({...prevItem, Type: '?', Rarity: '?', Stat: "?", StatValue: '?'}));
                break;
            case 'Chestpiece':
                setChestpiece(item)
                resetItem((prevItem) => ({...prevItem, Type: '?', Rarity: '?', Stat: "?", StatValue: '?'}));
                break;
            case 'Gloves':
                setGloves(item)
                resetItem((prevItem) => ({...prevItem, Type: '?', Rarity: '?', Stat: "?", StatValue: '?'}));
                break;
        }
    }

    return(
        
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={equipItem}>
                <Text style={styles.buttonText}>Equip</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles= StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: 'white'
    },
});

export default equip;