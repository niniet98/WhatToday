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
        model.loadRandomList();
    }, []);

    if (model.randomList == null) {
        return (
            <View style={styles.screen}>
                <ActivityIndicator size="large" color="red" />
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.filtersContainer}>
                <FilterButton />
                <FilterButton />
                <FilterButton />
                <FilterButton />
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
    filtersContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-around',
        marginHorizontal: 12,
        marginVertical: 15,
    }
})
