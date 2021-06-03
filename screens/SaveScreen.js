import { observer } from 'mobx-react';
import React, { useContext } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { ModelContext } from '../model/WhatTodayModel'

const SaveScreen = observer(({ navigation }) => {
    const model = useContext(ModelContext);
    return (
        <View style={styles.screen}>
            <Text>Això són les receptes guardades.</Text>
            <View style={{ height: 50 }}></View>
            <Button
                title="Screen 2"
                onPress={() => { navigation.navigate("screentwo") }}
            ></Button>
            <Text>{model.favRecipes}</Text>
            <Text>{model.totalRecipes}</Text>
        </View>
    )
});

export default SaveScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
