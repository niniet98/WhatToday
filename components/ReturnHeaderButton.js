import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ReturnIcon from './icons/returnIcon'

export default function ReturnHeaderButton() {
    return (
        <View style={styles.container}>
            <ReturnIcon />
        </View>
    )
}

const containerSize = 30;
const radius = containerSize / 2;

const styles = StyleSheet.create({
    container: {
        width: containerSize,
        height: containerSize,
        borderRadius: radius,
        backgroundColor: 'rgba(255,255,255,0.85)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        elevation: 7
    }
})
