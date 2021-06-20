import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Ingredients({ extendedIngredients }) {
    return (
        <View style={{ position: 'absolute', top: 0 }}>
            <View><Text style={styles.titleText}>INGREDIENTS</Text></View>
            <View style={styles.container}>
                {extendedIngredients.map((ingredient) => {
                    return (
                        <View key={ingredient.name} style={styles.ingredientsContainer}>
                            <View style={[styles.img, { elevation: 20 }]}><Image style={styles.img} source={{ uri: `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}` }} /></View>
                            <Text style={styles.ingredientText}>{ingredient.name}</Text>
                            <Text style={[styles.ingredientText, { fontWeight: 'bold' }]}>{ingredient.measures.metric.amount}{ingredient.measures.metric.unitShort}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const imageSize = 60;

const styles = StyleSheet.create({
    ingredientsContainer: {
        alignItems: 'center',
        margin: 10,
        width: '20%',
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    img: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        backgroundColor: 'white',
    },
    ingredientText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'normal',
        zIndex: 4,
        textAlign: 'center'

    },
    titleText: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,

    }
})
