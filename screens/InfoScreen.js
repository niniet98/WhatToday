import { observer } from 'mobx-react';
import React, { useEffect, useState, useRef } from 'react';
import { ActivityIndicator, Animated, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InfoDetalladaBG from '../components/icons/infoDetalladaBG';
import Directions from '../components/InfoDetallada/Directions';
import InfoTags from '../components/InfoDetallada/InfoTags';
import Ingredients from '../components/InfoDetallada/Ingredients';
import InfoTag from '../components/InfoTag';
import ReturnHeaderButton from '../components/ReturnHeaderButton';
import { getRecipeInfo, ModelContext } from '../model/WhatTodayModel';
import ModalSelector from 'react-native-modal-selector';
import { useContext } from 'react';
import { db, fire } from '../database/firebase';
import { set } from 'mobx';


const BANNER_H = 350;

const InfoScreen = observer(({ route, navigation: { goBack } }) => {
    const { id, rId } = route.params;
    console.log("rID", rId);
    const [recipeInfo, setRecipeInfo] = useState(null);
    const scrollA = useRef(new Animated.Value(0)).current;

    //----------------------//

    const model = useContext(ModelContext);

    //----------------------//

    const data = [];
    for (let i = 0; i < model.categorys.length; i++) {
        data.push({
            key: i,
            label: model.categorys[i]
        });
    }

    //----------------------//

    const userID = fire.auth().currentUser.uid;
    const [categories, setCategories] = useState([]);
    const dataModalSelect = [];

    const getCategories = () => {
        db.collection('users/' + userID + '/Categories').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            })
            setCategories(docs);
        })

    }

    categories.forEach((doc) => {
        console.log('entra');
        dataModalSelect.push({
            key: doc.id,
            label: doc.category
        });
    })
    console.log(dataModalSelect);



    const storeCategory = async (category) => {
        const recipeRef = db.doc(`users/${userID}/FavRecipes/${rId}`);
        try {
            console.log('ENTRA');
            await recipeRef.update({
                category: category
            })
        } catch (error) {
            console.log('ERROR', error);
        }
    }

    useEffect(() => {
        getRecipeInfo(id, setRecipeInfo);
        getCategories();
    }, []);

    if (recipeInfo === null) {
        return (
            <View style={styles.emptyScreen}>
                <ActivityIndicator size="large" color="#FC633A" />
            </View>
        )
    }


    return (
        <View>
            <TouchableOpacity style={styles.returnButton} onPress={() => goBack()}>
                <ReturnHeaderButton />
            </TouchableOpacity>
            <Animated.ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollA } } }],
                    { useNativeDriver: true },
                )}
                scrollEventThrottle={16}
            >
                <View style={styles.bannerContainer}>
                    <Animated.Image
                        style={styles.banner(scrollA)}
                        source={{ uri: recipeInfo.image }}
                    />
                </View>
                <View>
                    <View style={styles.tags}>
                        <InfoTag children={`${recipeInfo.readyInMinutes} min`} />
                        <InfoTag children={`${recipeInfo.servings} servings`} />
                    </View>
                    <Text style={[styles.title, { marginTop: 20 }]}>{recipeInfo.title}</Text>
                    <Text style={styles.title}>{recipeInfo.nutrition.nutrients[0].amount}Kcal</Text>

                    <View style={styles.modalSelector}>
                        <ModalSelector data={dataModalSelect} initValue="Select a category for this recipe" onChange={(option) => { storeCategory(option.label)/* model.setCategory(id, option.label, recipeInfo.image); */ }} />
                    </View>

                    <Text style={styles.summary}>{recipeInfo.summary}</Text>
                    <View style={styles.separator}></View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        style={{ zIndex: 4 }}
                    >
                        <View style={styles.pages}>
                            <Ingredients extendedIngredients={recipeInfo.extendedIngredients} />
                        </View>
                        <View style={styles.pages}>
                            <Directions steps={recipeInfo.analyzedInstructions[0].steps} />
                        </View>
                        <View style={styles.pages}>
                            <InfoTags cuisines={recipeInfo.cuisines} dishTypes={recipeInfo.dishTypes} />
                        </View>
                    </ScrollView>
                    <View></View>
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
    img: {
        width: screenWidth,
        height: screenHeight * (2 / 3),
        zIndex: -1,
    },
    svg: {
        position: 'absolute',
        top: -115,
    },
    title: {
        zIndex: 1,
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',

    },
    summary: {
        zIndex: 1,
        color: 'white',
        alignSelf: 'center',
        padding: 20,
        fontSize: 14
    },
    tags: {
        zIndex: 1,
        position: 'absolute',
        top: -80,
        alignItems: 'flex-end',
        right: 20
    },
    returnButton: {
        zIndex: 2,
        position: 'absolute',
        top: 0,

    },
    pages: {
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
        height: 350,

    },
    emptyScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    separator: {
        width: 175,
        height: 1,
        backgroundColor: 'white',
        alignSelf: 'center',
        zIndex: 3,
        marginBottom: 25,
        marginTop: 20
    },
    modalSelector: {
        zIndex: 1,
        color: 'white',
    }
})