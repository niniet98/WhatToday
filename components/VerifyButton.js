import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cross from './icons/cross';
import Verify from './icons/verify'



export default function VerifyButton({ type, size }) {

    /* const iconSize = size==="big" ? iconSize=58 : iconSize=80 ; */

    const content = type == true ? <Verify size={iconSize} /> : <Cross size={iconSize} />;

    return (
        <View style={styles.circle}>
            {content}
        </View>
    )
}

const iconSize = 58;

const styles = StyleSheet.create({
    circle: {
        width: iconSize,
        height: iconSize,
        borderRadius: iconSize,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
})
