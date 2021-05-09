import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Demo from './Demo';
import Verify from './icons/verify'


export default function VerifyButton({blank, centered}) {
    return (
        <Demo blank={blank} centered={centered}>
            <View style={styles.circle}>
                <Verify size={iconSize} />
            </View>
        </Demo>
    )
}

const iconSize = 58;

const styles = StyleSheet.create({
    circle: {
        width: iconSize,
        height: iconSize,
        borderRadius: iconSize,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        justifyContent: "center",
        alignItems: "center", 
        
    },


})
