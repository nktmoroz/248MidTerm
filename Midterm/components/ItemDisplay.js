import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemDisplay = ({type, rarity, stat, statValue}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.resultText}>blah blah</Text>
            <Text style={styles.resultText}>Icon Goes Here????</Text>
            <Text style={styles.resultText}>{stat}: {statValue}</Text>
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
    },

});

export default ItemDisplay;