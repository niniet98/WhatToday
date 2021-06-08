import { observer } from 'mobx-react';
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native'
import CardCreation from '../components/Cards';
import FilterButton from '../components/FilterButton';
import { ModelContext } from '../model/WhatTodayModel';

const HomeScreen = observer(({ navigation }) => {
    const model = useContext(ModelContext);

    useEffect(() => {
        model.loadRandomRecipe();
    }, []);

    if (model.randomRecipe === null) {
        return (
            <View style={[styles.screen, styles.emptyScreen]}>
                <ActivityIndicator size="large" color="#FC633A" />
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.filtersContainer}>
                <FilterButton filter="Mexican" />
                <FilterButton filter="Irish" />
                <FilterButton filter="Spanish" />
                <FilterButton filter="African" />
            </View>
            <CardCreation />
        </View>
    )
});

export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
    },
    emptyScreen: {
        justifyContent: "center",
        alignItems: "center"
    },
    filtersContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-around',
        marginHorizontal: 12,
        marginVertical: 15,
    }
})
