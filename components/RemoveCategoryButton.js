import React from 'react';
import { View, StyleSheet } from 'react-native';
import RemoveCategory from './icons/removeCategory';



export default function RemoveCategoryButton() {

    return (
        <View style={styles.circle}>
            <RemoveCategory />
        </View>
    )
}

const iconSize = 20;

const styles = StyleSheet.create({
    circle: {
        width: iconSize,
        height: iconSize,
        borderRadius: iconSize,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        backgroundColor: "rgb(205,205,205)"
    },
})
