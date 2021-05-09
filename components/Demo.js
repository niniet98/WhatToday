import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Demo(props) {
    const backgroundStyle = props.blank ? styles.demoBlank : styles.demoNotBlank;
    const centeredStyle = props.centered ? styles.demoCentered : styles.demoNotCentered;
    return (
        <View style={[centeredStyle, backgroundStyle]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    demoCentered: {
        borderWidth: 1,
        borderColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
    },
    demoNotCentered: {
        borderWidth: 1,
        borderColor: "#ddd",
        paddingTop: 20,
        paddingBottom: 20,
        /*flexDirection: "row",*/
    },
    demoBlank: {
        backgroundColor: '#fff'
    },
    demoNotBlank: {
        backgroundColor: '#F23838'
    }
})
