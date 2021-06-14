import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function InfoDetallada({navigation, route}) {
    const {id} = route.params;
    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
