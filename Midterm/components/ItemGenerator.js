import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ItemGenerator = () => {

    const [item, setItem] = useState();

    statValue = 0;

    const generateItem = () => {

        typeRoll = Math.floor((Math.random()) * 4);

        switch(typeRoll){
            case 0:
                console.log("Sword");
                break;
            case 1:
                console.log("Helmet");
                break;
            case 2:
                console.log("Chestpiece");
                break;
            case 3:
                console.log("Boots");
                break;
        };

        rarityRoll = Math.floor((Math.random()) * 3);

        switch(Math.floor(rarityRoll)){
            case 0:
                console.log("Common");
                break;
            case 1:
                console.log("Rare");
                break;
            case 2:
                console.log("Legendary");
                break;
        };
        if(typeRoll == 0){
            console.log("Attack:");
        }else {
            console.log("Defense");
        }
        console.log(Math.floor(Math.random() * (Math.pow(5,rarityRoll + 1) - Math.pow(5,rarityRoll)) + Math.pow(5,rarityRoll)));
        
        console.log('--------------------------');

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
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
    },

    button: {
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10
    }
});

export default ItemGenerator;