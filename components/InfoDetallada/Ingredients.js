import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Ingredients({ extendedIngredients }) {
    return (
        <View style={styles.container}>
            {extendedIngredients.map((ingredient)=>{
                return(
                    <View key={ingredient.name} style={styles.ingredientsContainer}>
                        <Image  style={styles.img} source={{ uri: ingredient.image }} />
                        <Text>{ingredient.name}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const imageSize = 60;

const styles = StyleSheet.create({
    ingredientsContainer:{
        alignItems: 'center',
        marginHorizontal: 20,
    },
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    img:{
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/2,
        backgroundColor: 'red',
    },
})
