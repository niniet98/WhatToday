import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, Image, StyleSheet, FlatList } from 'react-native'
import GetRecipe from './GetRecipe';

const URL_BASE = 'https://api.spoonacular.com';

/* const Recipe = ({ recipe }) => {
    return (
        <View>
            <Text>{recipe.title}</Text>
            <Image source={{ uri: recipe.image }} />
        </View>
    )
} */

export default function GetRandom() {
    const [recipes, setRecipes] = useState(null);

    const loadRecipes = async () => {
        const response = await fetch(`${URL_BASE}/recipes/random/?apiKey=6b7427f391974de5921bcd793e67086e&number=12`);
        const json = await response.json();
        setRecipes(json.recipes);
    };

    useEffect(() => {
        loadRecipes();
    }, [])

    if (recipes === null) {
        return <View style={styles.emptylist}>
            <ActivityIndicator size="large" color="#aab" />
        </View>
    }
    return (
        <FlatList
            data={recipes}
            renderItem={({ item }) => <GetRecipe item={item} />}
            keyExtractor={(item, index) => `${index}`}
            numColumns={3}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50
    }
})
