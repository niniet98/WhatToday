import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Demo from './Demo'

export default function Category({ children }) {

    const [pressed, setPressed] = useState(false);

    const extraStyle = pressed ? styles.buttonPressed : styles.buttonNotPressed;

    return (
        <Demo>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => setPressed(prevState => !prevState)}>
                    <View style={[styles.button, extraStyle]}>
                        <Text style={styles.text}>{children}</Text>
                    </View>
                </TouchableWithoutFeedback>
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
    button: {
        width: 98,
        height: 98,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    text: {
        color: "#F23838",
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        textAlign: "center"
    },
    buttonPressed: {
        opacity: .65
    },
    buttonNotPressed: {
        opacity: 1
    }
});