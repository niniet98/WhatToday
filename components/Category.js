import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { accentColor } from '../styles/styles';
import RemoveButton from "./RemoveButton";
import Demo from './Demo'
import { useContext } from 'react';
import { ModelContext } from '../model/WhatTodayModel';

export default function Category({ children }) {
    const model = useContext(ModelContext);

    const [pressed, setPressed] = useState(false);

    const extraStyle = pressed ? styles.buttonPressed : styles.buttonNotPressed;

    return (
        <View>
            <View style={{ position: "absolute", zIndex: 1, top: 0, right: 0 }}>
                <TouchableOpacity onPress={() => model.removeCategory(children)}>
                    <RemoveButton />
                </TouchableOpacity>
            </View>
            <TouchableWithoutFeedback onPress={() => setPressed(prevState => !prevState)}>
                <View style={[styles.button, extraStyle]}>
                    <Text style={styles.text}>{children}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View >
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
        zIndex: -1
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