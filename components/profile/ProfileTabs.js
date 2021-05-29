import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Grid from '../icons/grid';
import MediumChef from '../icons/mediumChef';

const MediumChefButton = (props) => (
    <View {...props} style={[styles.button, selectedStyle]}>
        <Text>HOLA</Text>
    </View>
)

export default function ProfileTabs() {

    const [pressed, setPressed] = useState(0);
    const selectedStyle = pressed ? styles.isSelected : styles.isNotSelected;

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => setPressed((prevPressed) => !prevPressed)}>
                <View style={[styles.button, selectedStyle]}>
                    <Grid />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={[styles.button, selectedStyle]}>
                    <MediumChef />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        /* alignItems: 'stretch', */
        alignItems: 'baseline',
        justifyContent: 'space-around',
        /* paddingVertical: 20, */
    },
    button: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 4
    },
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
})
