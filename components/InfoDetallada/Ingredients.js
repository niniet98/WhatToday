import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ModelContext } from '../../model/WhatTodayModel';

export default function Ingredients() {
    const model = useContext(ModelContext);
    const extendedIngredients = model.recipeInfo.extendedIngredients;
    
    return (
        <View style={styles.container}>
            {extendedIngredients.map((ingredient)=>{
                return(
                    <View style={styles.ingredientsContainer}>
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
