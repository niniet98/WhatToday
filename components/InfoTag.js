import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function InfoTag({ children }) {

    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 4,
        height: 24,
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.85)',
    },
    text: {
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 12,
        alignItems: 'stretch',
        color: "#FC633A",
    },
});