import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ItemGenerator = () => {

    const [item, setItem] = useState();

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
        <View>
            <TouchableOpacity onPress={generateItem}> 
                <Text style= {styles.buttonText}> Generate </Text>
            </TouchableOpacity>
        </View>
    );

};

const styles= StyleSheet.create({
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
    }

});

export default ItemGenerator;