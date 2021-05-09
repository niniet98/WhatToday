import React, { useState} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Demo from './Demo'



export default function ButtonSubmit() {

    const [pressed, setPressed] = useState(false);

    const extraStyle = pressed ? styles.buttonPressed : styles.buttonNotPressed;

    return (
        <Demo>
        <View style={styles.container}>
            <View style={[styles.button, extraStyle]}>
                <Text style={styles.buttonText}>Enter </Text>
            </View>
        </View>
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
        margin: 2,
        height: 30,
        borderWidth: 0.1,
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 18, 
    },
    buttonNotPressed: {
        backgroundColor: '#FCB13A',
    },
    buttonText: {
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#ffff",
        fontSize: 12,
    },
  });