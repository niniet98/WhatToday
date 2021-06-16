import { observer } from 'mobx-react';
import React, { useContext, useEffect, useRef } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, Animated, ScrollView } from 'react-native';
import { ModelContext } from '../model/WhatTodayModel';
import InfoDetalladaBG from '../components/icons/infoDetalladaBG';
import InfoTag from '../components/InfoTag';
import ReturnHeaderButton from '../components/ReturnHeaderButton';
import Ingredients from '../components/InfoDetallada/Ingredients';
import Directions from '../components/InfoDetallada/Directions';
import InfoTags from '../components/InfoDetallada/InfoTags';

const BANNER_H = 350;

const InfoScreen = observer(({route, navigation: { goBack }}) => {
    const model = useContext(ModelContext);
    const {id} = route.params;

    useEffect(() => {
        model.getRecipeInfo({id});
    }, []);
    const scrollA = useRef(new Animated.Value(0)).current;
    return (
        <View>
            <TouchableOpacity style={styles.returnButton} onPress={() => goBack()}>
                <ReturnHeaderButton  />
            </TouchableOpacity>
            <Animated.ScrollView
                onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollA}}}],
                {useNativeDriver: true},
                )}
                scrollEventThrottle={16}
            >
                <View style={styles.bannerContainer}>
                <Animated.Image
                    style={styles.banner(scrollA)}
                    source={{ uri: model.recipeInfo.image }}
                />
                </View>
                <View>
                    <View style={styles.tags}>
                        <InfoTag children={`${model.recipeInfo.readyInMinutes} min`} />
                        <InfoTag children={`${model.recipeInfo.servings} servings`} />
                    </View>   
                    <Text style={[styles.title, {marginTop:20}]}>{model.recipeInfo.title}</Text>
                    <Text style={styles.title}>{model.recipeInfo.nutrition.nutrients[0].amount}Kcal</Text> 
                    <Text style={styles.summary}>{model.recipeInfo.summary}</Text> 
                    <ScrollView   
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        >
                            <View style={[styles.pages, {backgroundColor: 'transparent'}]}><Ingredients /></View>  
                            <View style={[styles.pages, {backgroundColor: 'blue'}]}><Directions /></View> 
                            <View style={[styles.pages, {backgroundColor: 'green'}]}><InfoTags /></View>
                    </ScrollView>
                    <InfoDetalladaBG style={styles.svg} />
                </View>
            </Animated.ScrollView>            
        </View>
    )
})

export default InfoScreen;

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    bannerContainer: {
        marginTop: -1000,
        paddingTop: 1000,
        alignItems: 'center',
        overflow: 'hidden',
    },
    banner: scrollA => ({
        height: BANNER_H,
        width: '200%',
        transform: [
          {
            translateY: scrollA.interpolate({
              inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
              outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
            }),
          },
          {
            scale: scrollA.interpolate({
              inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
              outputRange: [2, 1, 0.5, 0.5],
            }),
          },
        ],
      }),
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
    },
    returnButton:{
        zIndex: 2,
        position: 'absolute',
        top:0,
        
    },
    pages: {
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200

    },
})