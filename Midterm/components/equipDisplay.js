import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const EquipDisplay = ({sword, helmet, chestpiece, gloves}) => {

    

    return (
        <View style={styles.container}>
            <hr style={{height: 1, color: 'black', width: '100%'}}/>
            <Text style={styles.equippedText}>Equipped</Text>
            <View style={styles.equipmentSlots}>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.iconBorder('orange')}>
                        <img src='./icons/sword.png' style={styles.equipmentIcon}/>
                    </View>
                    <Text style={{fontWeight:'bold', fontSize: 20}}>Attack: {sword.StatValue}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.iconBorder('orange')}>
                        <img src='./icons/helmet.png' style={styles.equipmentIcon}/>
                    </View>
                    <Text style={{fontWeight:'bold', fontSize: 20}}>Defense: {helmet.StatValue}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.iconBorder('orange')}>
                        <img src='./icons/chest.png' style={styles.equipmentIcon}/>
                    </View>
                    <Text style={{fontWeight:'bold', fontSize: 20}}>Defense: {chestpiece.StatValue}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.iconBorder('orange')}>
                        <img src='./icons/gloves.png' style={styles.equipmentIcon}/>
                    </View>
                    <Text style={{fontWeight:'bold', fontSize: 20}}>Defense: {gloves.StatValue}</Text>
                </View>
            </View>
        </View>
    );

};

const styles=StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10
    },
    equippedText:{
        fontWeight: 'bold',
        fontSize: 50,
        padding: 10
    },
    equipmentSlots: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    equipmentIcon: {
        maxWidth: 100,
        maxHeight: 100,
        padding: 20,
    },
    iconBorder: (color) => ({
        flex: 1,
        flexDirection: 'column',
        margin:10,
        backgroundColor: color,
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor: color
    }),

});

export default EquipDisplay;