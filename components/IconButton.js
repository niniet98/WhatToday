import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MediumChef from './icons/mediumChef';
import Grid from './icons/grid';
import InfoIcon from './icons/infoIcon';
import TagsIcon from './icons/tagsIcon';
import IngredientsIcon from './icons/ingredientsIcon';
import DirectionsIcon from './icons/directionsIcon';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function IconButton({ pressed, iconName }) {

    /* const [pressed, setPressed] = useState(false); */

    const selectedStyle = pressed ? styles.isSelected : styles.isNotSelected;
    /* const widthStyle = large ? styles.isLarge : styles.isShort; */

    switch (iconName) {
        case 'chef':
            return (

                <View style={[styles.button, selectedStyle]}>
                    <MediumChef />
                </View>
            )
            break;
        case 'grid':
            return (
                <View style={[styles.button, selectedStyle]}>
                    <Grid />
                </View>
            )
            break;
        case 'info':
            return (
                <View style={[styles.button, selectedStyle]}>
                    <InfoIcon />
                </View>
            )
            break;
        case 'tags':
            return (
                <View style={[styles.button, selectedStyle]}>
                    <TagsIcon />
                </View>
            )
            break;
        case 'ingredients':
            return (
                <View style={[styles.button, selectedStyle]}>
                    <IngredientsIcon />
                </View>
            )
            break;
        case 'directions':
            return (
                <View style={[styles.button, selectedStyle]}>
                    <DirectionsIcon />
                </View>
            )
            break;
    }

}

const buttonHeight = 29;

const styles = StyleSheet.create({
    isSelected: {
        backgroundColor: 'rgba(252, 99, 58, 0.10)',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#FC633A',
    },
    isNotSelected: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.25)',
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        /* height: buttonHeight, */
        paddingVertical: 3,
    },


})