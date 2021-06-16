import { observer } from 'mobx-react';
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import Cards from '../components/Cards';
import FilterButton from '../components/FilterButton';
import { ModelContext } from '../model/WhatTodayModel';
import VerifyButton from '../components/VerifyButton';
import HomeBackground from '../components/icons/HomeBackground';

const HomeScreen = observer(({ navigation }) => {
    const model = useContext(ModelContext);

    useEffect(() => {
        model.loadRandomRecipe();
    }, []);

    if (model.randomRecipe === null) {
        return (
            <View style={styles.emptyScreen}>
                <ActivityIndicator size="large" color="#FC633A" />
            </View>
        )
    }

    return (
        <View>
            <HomeBackground style={styles.bg} />
            <View style={styles.screen}>
                <ScrollView horizontal={true} style={styles.filtersContainer}>
                    <FilterButton filter="Mexican" />
                    <FilterButton filter="Japanese" />
                    <FilterButton filter="American" />
                    <FilterButton filter="Spanish" />
                    <FilterButton filter="Chinese" />
                    <FilterButton filter="African" />
                    <FilterButton filter="Nordic" />
                    <FilterButton filter="Irish" />
                    <FilterButton filter="British" />
                    
                </ScrollView>
                    <Cards /> 
                    <View style={styles.fade1}></View>
                    <View style={styles.fade2}></View>
                    <View style={styles.butcontainer}>
                        <View style={styles.button}>
                        <TouchableOpacity onPress={() => model.loadRandomRecipe()}>
                                <VerifyButton type={false} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                    model.addFavRecipe(model.randomRecipe[0].id, model.randomRecipe[0].image);
                                    model.loadRandomRecipe();
                                }}>
                                <VerifyButton type={true} size={"big"} />
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        </View>
    )
});

export default HomeScreen;

const screenWidth = Dimensions.get("window").width;

const screenHeight = Dimensions.get("window").height;



const styles = StyleSheet.create({
    bg:{
        position: 'absolute',
        top: screenHeight*(0.5/4),
    },
    screen: {
        flexDirection: 'column',
        alignItems: "center"
    },
    emptyScreen: {
        justifyContent: "center",
        alignItems: "center"
    },
    filtersContainer: {
        flexDirection: 'row',
        alignContent: 'space-around',
        marginHorizontal: 12,
        marginVertical: 15,
    },
    fade1: {
        width: screenWidth*(4/5),
        height: 200,
        backgroundColor: 'rgba(255,170,147,1)',
        zIndex: -1,
        borderRadius: 15,
        position: 'absolute',
        top: '11%',
    },
    fade2: {
        width: screenWidth*(3.5/5),
        height: 200,
        backgroundColor: 'rgba(255,214,203,1)',
        zIndex: -2,
        borderRadius: 15,
        position: 'absolute',
        top: '9.6%',
    },
    butcontainer: {
        alignContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 360,
        marginTop: screenHeight*(2.8/4),
    },
    button: {
        width: screenWidth,
        padding: 6,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 0,
    },
})
