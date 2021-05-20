import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function AddScreen() {
    return (
        <View style={styles.container}>
            <Text>Aquesta pantalla serà per afegir receptes.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
