import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { ModelContext } from '../model/WhatTodayModel';
import InfoDetalladaBG from '../components/icons/infoDetalladaBG';
import InfoTag from '../components/InfoTag'

const InfoScreen = observer(({navigation, route}) => {
    const model = useContext(ModelContext);
    const {id} = route.params;

    useEffect(() => {
        model.getRecipeInfo({id});
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: model.recipeInfo.image }} />
            <View>
                <View style={styles.tags}>
                    <InfoTag children={`${model.recipeInfo.readyInMinutes} min`} />
                    <InfoTag children={`${model.recipeInfo.servings} servings`} />
                </View>   
                <Text style={[styles.title, {marginTop:20}]}>{model.recipeInfo.title}</Text>
                {/* <Text style={styles.title}>{model.recipeInfo.nutrition.nutrients[0].amount}Kcal</Text>  */}
                <Text style={styles.summary}>{model.recipeInfo.summary}</Text> 
                <InfoDetalladaBG style={styles.svg} />
            </View>
            
        </View>
    )
})

export default InfoScreen;

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    img:{
        width: screenWidth,
        height: screenHeight*(2/3),
        zIndex:-1,
    },
    svg:{
        position: 'absolute',
        top: -100,
    },
    title:{
        zIndex:1,
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        
    },
    container:{
        
    },
    summary:{
        zIndex:1,
        color:'white',
        alignSelf:'center',
        padding: 20,
    },
    tags: {
        zIndex:1,
        position: 'absolute',
        top: -80,
        alignItems: 'flex-end',
        right: 20
    }
})