import React from 'react'
import { View, Text, StyleSheet, CheckBox } from 'react-native'
import Demo from './Demo'

export default function Checkbox({ children }) {
    return (
        <Demo>
            <View style={styles.container}>
                <CheckBox style={styles.check} />
                <Text style={styles.label}>{children}</Text>
            </View>
        </Demo>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* padding: 20, */
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        /* backgroundColor: "#FC633A" */
    },
    label: {
        marginLeft: 10,
        fontFamily: "Poppins-Regular",
        fontSize: 11,
        color: "white"
    },
});

