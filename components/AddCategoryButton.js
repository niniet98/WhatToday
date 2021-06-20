import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddCategory from './icons/addCategory';



export default function AddCategoryButton() {

    return (
        <View style={styles.circle}>
            <AddCategory />
        </View>
    )
}

const iconSize = 58;

const styles = StyleSheet.create({
    circle: {
        width: iconSize,
        height: iconSize,
        borderRadius: iconSize,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
})
