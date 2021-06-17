import { observer } from 'mobx-react';
import React, { useContext } from 'react'
import { View, ScrollView, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import CategoriesBG from '../components/icons/categoriesBG';
import { ModelContext } from '../model/WhatTodayModel';
import Category from '../components/Category';
import { LinearGradient } from 'expo-linear-gradient'
import { primaryColor } from '../styles/styles';

const numColumns = 3;
const Recipe = ({ img, counter }) => (
    counter % 2 == 0 ?
        <View style={[styles.recipe, styles.rotationRight]}><Image style={styles.picture} source={{ uri: img }} /></View> :
        <View style={[styles.recipe, styles.rotationLeft]}><Image style={styles.picture} source={{ uri: img }} /></View>
);

const SaveScreen = observer(({ navigation }) => {
    const model = useContext(ModelContext);

    return (
        <View style={styles.screen}>
            <FlatList
                data={model.favRecipes}
                renderItem={({ item, index }) => (
                    index % 3 == 1 ?
                        <TouchableOpacity onPress={() =>
                            navigation.navigate("Info", { id: item.id })
                        }>
                            <Recipe key={item.id} img={item.img} counter={index} />
                        </TouchableOpacity> :
                        <TouchableOpacity style={styles.columnaSenar} onPress={() =>
                            navigation.navigate("Info", { id: item.id })
                        }>
                            <Recipe key={item.id} img={item.img} counter={index} />
                        </TouchableOpacity>
                )}
                numColumns={numColumns}
            />
            {/* <CategoriesBG style={styles.categoriesContainer} /> */}
            <LinearGradient
                // Button Linear Gradient
                colors={['#F23838', '#FCB13A']}
                start={[1, 0]}
                end={[0, 1]}
                style={styles.categoriesContainer}>
                <Category children='PASTA' />
                <Category children='MEAT' />
                <Category children='FISH' />
                <Category children='DESSERTS' />
                <Category children='VEGAN' />
            </LinearGradient>
        </View>
    )
});

export default SaveScreen;

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const rotation = 6;

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        height: screenHeight,
        width: screenWidth,
        backgroundColor: 'white',
    },
    favsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
    },
    recipe: {
        width: screenWidth * (97 / 375),
        height: screenHeight * (5 / 23),
        borderRadius: 20,
        margin: 10,
        flex: 1 / numColumns,
        elevation: 5,
    },
    rotationRight: {
        transform: [{ rotate: `${rotation}deg` }],
    },
    rotationLeft: {
        transform: [{ rotate: `-${rotation}deg` }],

    },
    picture: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        alignItems: "center",

    },
    categoriesContainer: {
        backgroundColor: primaryColor,
        height: 360,
        width: screenWidth,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 40,
        elevation: 7,
    },
    columnaSenar: {
        marginTop: 50,
    }

})
