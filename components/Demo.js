import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Demo(props) {
    return (
        <View style={styles.demo}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    demo: {
        height: 230,
        borderWidth: 1,
        borderColor: "#ddd",
        /* justifyContent: "center",
        alignItems: "center", */
    }
})
