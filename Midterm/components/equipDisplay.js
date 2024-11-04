import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Sword from './equipment_slots/sword';
import Helmet from './equipment_slots/helmet';
import Chestpiece from './equipment_slots/chest';
import Gloves from './equipment_slots/gloves';

const EquipDisplay = ({sword, helmet, chestpiece, gloves}) => {

    

    return (
        <View style={styles.container}>
            <hr style={{height: 1, color: 'black', width: '100%'}}/>
            <Text style={styles.equippedText}>Equipped</Text>
            <View style={styles.equipmentSlots}>
                <View style={{alignItems: 'center'}}>
                    <Sword sword={sword}/>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Helmet helm={helmet}/>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Chestpiece chest={chestpiece}/>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Gloves gloves={gloves}/>
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