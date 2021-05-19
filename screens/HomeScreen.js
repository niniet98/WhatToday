import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Hola pepsicola!</Text>
            <Button
                title="Screen 2"
                onPress={() => { navigation.navigate("screentwo") }}
            ></Button>
        </View>
    )
}
