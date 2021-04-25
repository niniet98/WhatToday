import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Demo from './Demo'

export default function NavBar() {
    return (
        <Demo>
            <View style={styles.container}>
                <View style={styles.column}>
                    <Text>hey</Text>
                </View>
                <View style={styles.column}>
                    <Text>hey</Text>
                </View>
                <View style={styles.column}>
                    <Text>hey</Text>
                </View>
                <View style={styles.column}>
                    <Text>hey</Text>
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
        margin: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: '#eee'
    },
    column: {
        flex: 1,
        alignItems: 'center',
    }
})
