import React, { useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Demo from './Demo'



export default function FilterButton() {

    const [pressed, setPressed] = useState(false);

    const extraStyle = pressed ? styles.buttonPressed : styles.buttonNotPressed;

    return (
        <Demo>
        <TouchableWithoutFeedback onPress={() => setPressed((prevPressed) => !prevPressed)}>
        <View style={styles.container}>
            <View style={[styles.button, extraStyle]}>
                <Text style={styles.buttonText}>Vegan </Text>
            </View>
            <View style={[styles.button, extraStyle]}>
                <Text style={styles.buttonText}>Gluten Free</Text>
            </View>
            <View style={[styles.button, extraStyle]}>
                <Text style={styles.buttonText}>Fitness </Text>
            </View>
            <View style={[styles.button, extraStyle]}>
                <Text style={styles.buttonText}>Desserts </Text>
            </View>
            <View style={[styles.button, extraStyle]}>
                <Text style={styles.buttonText}>Cheap </Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
        </Demo>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    button: {
        flex: 1,
        margin: 4,
        height: 22,
        borderWidth: 0.1,
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 18, 
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
        color: "#F23838",
        fontSize: 9,
    },
  });