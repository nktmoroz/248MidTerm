import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ItemDisplay = ({item}) => {
    let isShown = 'false';
    let iconColor;
    switch(item.Rarity){
        case 'Common':
            iconColor = '#FFFFFF'
            break;
        case 'Rare': 
            iconColor = '#4169E1'
            break;
        case 'Legendary':
            iconColor = '#FFA500'
            break;
        case '?':
            iconColor = '#FFFFFF'
    }
    let itemIcon;
    switch(item.Type){
        case 'Sword':
            itemIcon = './icons/sword.png'
            break;
        case 'Helmet': 
            itemIcon = './icons/helmet.png'
            break;
        case 'Chestpiece':
            itemIcon = './icons/chest.png'
            break;
        case 'Gloves':
            itemIcon = './icons/gloves.png'
            break;
        case '?':
            itemIcon = './icons/treasure.png'
    }

    return(
        <View style={styles.container}>
            <Text style={styles.itemText}>{item.Rarity == '?' ? 'What could be inside?' : item.Rarity} {item.Type == '?' ? '': item.Type + "!"}</Text>
            <View style={styles.iconBorder(iconColor)}> 
                <img src={itemIcon} style={styles.icon}/> 
            </View>
            <Text style={styles.statText}>{item.Stat == '?' ? 'Better check!':item.Stat + ': ' + item.StatValue}</Text>
        </View>
    );

};

const styles= StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
    },

    itemText: {
        fontSize: 40,
        fontWeight: 'bold',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

    statText: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        paddingTop: 10
    },

    icon: {
        maxWidth: 150,
        maxHeight: 150,
        padding: 10,
        alignSelf: 'center',
        borderWidth: 10,
        borderColor: 'black',
    },

    iconBorder: (color) => ({
        borderWidth: 7,
        borderColor: 'black',
        borderRadius: 10,
        margin: 10,
        backgroundColor: color,
    }),

});

export default ItemDisplay;