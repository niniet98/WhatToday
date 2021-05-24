import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import CardCreation from '../components/Cards';
import FilterButton from '../components/FilterButton';

export default function HomeScreen({ navigation }) {
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
}

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
