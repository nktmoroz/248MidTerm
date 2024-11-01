import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ItemDisplay = ({item}) => {
    console.log(item.Rarity);

    bgColor = '#FFFFFF';
    switch(item.Rarity){
        case 'Rare': 
            bgColor = '#0000FF'
            break;
        case 'Legendary':
            bgColor = '#FFA500'
            break;
    }

    console.log(bgColor)
    styles.iconBorder.backgroundColor = bgColor;
    console.log(styles.iconBorder.backgroundColor)

    return(
        <View style={styles.container}>
            <Text style={styles.itemText}>{item.Rarity} {item.Type}!</Text>
            <View style={styles.iconBorder}> <img src='./icons/sword.png' style={styles.icon}/> </View>
            <Text style={styles.statText}>{item.Stat}: {item.StatValue}</Text>
        </View>
    );

};

const styles= StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
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
        paddingTop: 10,
        paddingBottom: 10
    },

    icon: {
        maxWidth: 150,
        maxHeight: 150,
        padding: 10,
        alignSelf: 'center',
        borderWidth: 10,
        borderColor: 'black'
    },

    iconBorder:{
        borderWidth: 7,
        borderColor: 'black',
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#FFFFFF'
    }

});

export default ItemDisplay;