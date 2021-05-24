import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Demo from './Demo'

export default function FilterButton() {

    const [pressed, setPressed] = useState(false);

    const extraStyle = pressed ? styles.buttonPressed : styles.buttonNotPressed;

    const colorStyle = pressed ? styles.textPressed : styles.textNotPressed;

    return (
        <TouchableWithoutFeedback onPress={() => setPressed((prevPressed) => !prevPressed)}>
            {/* <View style={styles.container}> */}
            <View style={[styles.button, extraStyle]}>
                <Text style={[styles.buttonText, colorStyle]}>Vegan</Text>
            </View>
            {/* </View> */}
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
    },
    button: {
        flex: 1,
        margin: 4,
        height: 22,
        borderWidth: 0.1,
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 18,
        justifyContent: 'center',
    },
    buttonNotPressed: {
        backgroundColor: '#FFFFFF',
    },
    buttonPressed: {
        backgroundColor: "#F23838",
    },
    buttonText: {
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 9,
    },
    textNotPressed: {
        color: "#F23838",
    },
    textPressed: {
        color: 'white',
    }
});