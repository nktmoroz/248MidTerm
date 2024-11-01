import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ItemDisplay = ({item}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.resultText}>Rarity Item!</Text>
            <Text style={styles.resultText}>*Icon goes here*</Text>
            <Text style={styles.resultText}>Stat: StatValue</Text>
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

});

export default ItemDisplay;