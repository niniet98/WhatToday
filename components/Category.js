import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { accentColor } from '../styles/styles';
import Demo from './Demo'

export default function Category({ children }) {

    const [pressed, setPressed] = useState(false);

    const extraStyle = pressed ? styles.buttonPressed : styles.buttonNotPressed;

    return (

        <TouchableWithoutFeedback onPress={() => setPressed(prevState => !prevState)}>
            <View style={[styles.button, extraStyle]}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({
    button: {
        width: 98,
        height: 98,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        margin: 7,
        elevation: 5,
    },
    text: {
        color: accentColor,
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        textAlign: "center",
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    buttonPressed: {
        opacity: .55
    },
    buttonNotPressed: {
        opacity: 1
    }
});