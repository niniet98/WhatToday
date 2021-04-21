import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Demo from './Demo'

export default function Profile() {
    return (
        <Demo>
            <View style={{ margin: 20 }}>
                <Text style={styles.fontText, { fontSize: 18 }}>ayelen_97</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.column}>
                    <Text style={styles.text, styles.fontText}>13</Text>
                    <Text style={styles.text, styles.fontText}>Posts</Text>
                </View>
                <View style={styles.column}>
                    <Image style={styles.avatar} source={require('../assets/ayelen.jpg')} />
                </View>
                <View style={styles.column}>
                    <Text style={styles.text, styles.fontText}>33</Text>
                    <Text style={styles.text, styles.fontText}>Saved</Text>
                </View>
            </View>
            <View style={styles.fontText, { margin: 20, alignItems: 'center', fontSize: 12 }}>
                <Text>Ayelen</Text>
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
    column: {
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    fontText: {
        fontFamily: 'Poppins-Bold',
    },
    text: {
        fontSize: 10,
    }
})
