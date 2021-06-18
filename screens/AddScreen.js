import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CameraOn from '../components/CameraOn'

export default function AddScreen() {
    return (
            <CameraOn style={styles.container}></CameraOn>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },
})
