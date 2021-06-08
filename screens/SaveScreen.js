import { observer } from 'mobx-react';
import React, { useContext } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { ModelContext } from '../model/WhatTodayModel'

const SaveScreen = observer(({ navigation }) => {
    const model = useContext(ModelContext);


    let favRecipesContent = model.favRecipes.length === 0 ?
        <Text>No hi ha receptes guardades</Text>
        :
        model.favRecipes.map((recipe, index) => <View style={styles.recipe}><Text style={styles.recipeText}>{recipe.title}</Text></View>);


    return (
        <View style={styles.screen}>
            <View style={{ height: 50 }}></View>
            <Button
                title="Screen 2"
                onPress={() => { navigation.navigate("screentwo") }}
            />
            {favRecipesContent}
        </View>
    )
});

export default SaveScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    recipe: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    recipeText: {
        fontSize: 16,
        fontWeight: "bold"
    }
})
