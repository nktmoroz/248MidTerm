import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Gloves = ({gloves}) => {

    let iconColor = '#FFFFFF'
    switch (gloves.Rarity){
        case 'Rare':
            iconColor = '#4169E1'
            break;
        case 'Legendary':
            iconColor = '#FFA500'
            break;
    }

    return(
        <View style={{alignItems: 'center'}}>
            <View style={styles.iconBorder(iconColor)}>
                <img src='./icons/gloves.png' style={styles.equipmentIcon}/>
            </View>
            <Text style={{fontWeight:'bold', fontSize: 20}}>Defense: {gloves.StatValue}</Text>
        </View>
        
    );

};

const styles=StyleSheet.create({
    iconBorder: (color) => ({
        flex: 1,
        flexDirection: 'column',
        margin:10,
        backgroundColor: color,
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor: color
    }),
    equipmentIcon: {
        maxWidth: 100,
        maxHeight: 100,
        padding: 20,
    }

});

export default Gloves;