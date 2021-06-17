import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, Image, StyleSheet, FlatList } from 'react-native'
import { useContext } from 'react';
import FavRecipeImage from './FavRecipeImage';
import { ModelContext } from '../../model/WhatTodayModel';
import { observer } from 'mobx-react';


const GetRecipes = observer(() => {
    const model = useContext(ModelContext);

    return (
        <FlatList
            data={model.favRecipes}
            renderItem={({ item }) => <FavRecipeImage image={item.img} />}
            keyExtractor={(item, index) => `${index}`}
            numColumns={3}
        />
    )
});

export default GetRecipes;

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50
    }
})
