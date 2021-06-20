import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Add from './icons/add';



export default function AddCategoryButton({ type, size }) {

    //const content = type == true ? <Verify size={iconSize} /> : <Cross size={iconSize} />;

    return (
        <View style={styles.circle}>
            <Add />
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
