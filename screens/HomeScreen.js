import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import CardCreation from '../components/Cards';
import FilterButton from '../components/FilterButton';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <FilterButton />
            <CardCreation />
            {/* <Text>Aquí es on podràn guardar i descartar receptes.</Text>
            <View style={{ height: 10 }}></View>
            <Button title="Back Please!" onPress={() => {
                navigation.goBack();
            }}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        /* justifyContent: 'center', */
        alignItems: 'center'
    }
})
