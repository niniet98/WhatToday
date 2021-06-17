import React, { useState } from 'react'
import { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { ModelContext } from '../model/WhatTodayModel';
import { accentColor } from '../styles/styles';

export default function FilterButton({ filter }) {
    const model = useContext(ModelContext);

    const [pressed, setPressed] = useState(false);

    const extraStyle = pressed ? styles.buttonPressed : styles.buttonNotPressed;

    const colorStyle = pressed ? styles.textPressed : styles.textNotPressed;

    return (
        <TouchableWithoutFeedback onPress={() => {
            setPressed((prevPressed) => !prevPressed);
            if (pressed === false) {
                model.addFilter(filter);
                model.loadRandomRecipe();
            } else {
                model.removeFilter(filter);
                model.loadRandomRecipe();
            }
        }}>
            <View style={[styles.button, extraStyle]}>
                <Text style={[styles.buttonText, colorStyle]}>{filter}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 4,
        height: 24,
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 18,
        justifyContent: 'center',
        elevation: 3.5,
    },
    buttonNotPressed: {
        backgroundColor: '#FFFFFF',
    },
    buttonPressed: {
        backgroundColor: accentColor,
    },
    buttonText: {
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 12,
        alignItems: 'stretch',
    },
    textNotPressed: {
        color: accentColor,
    },
    textPressed: {
        color: 'white',
    }
});