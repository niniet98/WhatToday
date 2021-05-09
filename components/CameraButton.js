import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Demo from './Demo';
import Camera from './icons/camera';


export default function CameraButton({blank, centered}) {
    return (
        <Demo blank={blank} centered={centered}>
            <View style={styles.circle}>
                <Camera size={iconSize} />
            </View>
        </Demo>
    )
}

const boxSize = 58;
const iconSize = 34;

const styles = StyleSheet.create({
    circle: {
        width: boxSize/0.95,
        height: boxSize,
        borderTopRightRadius: boxSize,
        borderBottomRightRadius: boxSize,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        justifyContent: "center",
        alignItems: "center", 
    },


})