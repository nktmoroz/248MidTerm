import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ItemDisplay = ({item}) => {
    console.log(item.Rarity)

    return(
        <View style={styles.container}>
            <Text style={styles.resultText}>{item.Rarity} {item.Type}!</Text>
            <img src='./icons/sword.png' style={styles.icon}/>
            <Text style={styles.resultText}>{item.Stat}: {item.StatValue}</Text>
        </View>
    );

};

const styles= StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },

    resultText: {
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
        alignSelf: 'center'
    }

});

export default ItemDisplay;