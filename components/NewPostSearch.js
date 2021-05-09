import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Demo from './Demo'

export default function NewPostSearch({ blank, centered }) {
    return (
        <Demo blank={blank} centered={centered}>
            <View style={styles.container}>
                <View style={styles.icon} />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Search..."
                    placeholderTextColor="rgba(0,0,0,.5)"
                />
                <View style={styles.line} />
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
        flexDirection: "row"
    },
    textInputStyle: {
        fontSize: 14,
        fontFamily: "Poppins-Medium",
        color: "rgba(0,0,0,.5)",
        width: 300,

    },
    icon: {
        width: 15,
        height: 15,
        backgroundColor: "#FC633A",     //FALTA PONER EL SVG. AUN NO SE COMO FUNCIONA
        marginRight: 5,
        borderRadius: 10,
        opacity: .5,
    },
    line: {
        position: "absolute",
        top: 15 * 3,
        width: 300 + 15 + 5,
        height: 0,
        borderColor: "#FC633A",
        borderBottomWidth: 1,
    }
});
