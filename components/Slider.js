import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Demo from './Demo';

export default function Slider() {
    return (
        <Demo>
            <View style={styles.container}>
                <View style={styles.rectangle}>
                    <View style={[styles.ellipse, styles.active]} />
                    <View style={styles.ellipse} />
                    <View style={styles.ellipse} />
                </View>
            </View>
        </Demo>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        /* backgroundColor: "#FC633A" */
    },
    rectangle: {
        flexDirection: "row",
        width: 50,
        height: 25,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    ellipse: {
        margin: 2,
        width: 7,
        height: 7,
        borderRadius: 5,
        backgroundColor: "#FC633A",
        opacity: 0.5
    },
    active: {
        opacity: 1
    }
});