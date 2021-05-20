import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function SaveScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text>Això són les receptes guardades.</Text>
            <View style={{ height: 50 }}></View>
            <Button
                title="Screen 2"
                onPress={() => { navigation.navigate("screentwo") }}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
