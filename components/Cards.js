import { observer } from "mobx-react";
import React, { useContext, useRef } from "react";
import { Animated, PanResponder, StyleSheet, View, Image, Button, Alert, Text, IconButton, Dimensions } from "react-native";
import { ModelContext } from "../model/WhatTodayModel";
import { accentColor, primaryColor } from "../styles/styles";

const Cards = observer(() => {
    const model = useContext(ModelContext);
    //-------------------//
    /*     const pan = useRef(new Animated.ValueXY()).current;
    
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                {
                    dx: pan.x, // x,y are Animated.Value
                    dy: pan.y,
                },
            ]),
            onPanResponderRelease: () => {
                Animated.spring(
                    pan, // Auto-multiplexed
                    { toValue: { x: 0, y: 0 } } // Back to zero
                ).start();
            },
        }); */

    return (
        <View style={styles.container}>

            {/* <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.box]}>
                <Image style={styles.picture} source={{ uri: model.randomRecipe[0].image }} />
                <Text style={styles.text}>{model.randomRecipe[0].title}, {model.randomRecipe[0].nutrition.nutrients[0].amount} Kcal</Text>
            </Animated.View> */}
            <View style={styles.box}>
                {/*<Image style={styles.picture} source={{ uri: model.randomRecipe[0].image }} />*/}
                <Image style={styles.picture} source={{ uri: `https://spoonacular.com/recipeImages/${model.randomRecipe[0].id}-636x393.jpg` }} />
                <Text style={styles.text}>{model.randomRecipe[0].title}, {Math.round(model.randomRecipe[0].nutrition.nutrients[0].amount)} Kcal</Text>
                <Text style={styles.messageStyle}>Loading image</Text>
            </View>
        </View>
    );
});

const screenHeight = Dimensions.get("window").height;
const boxHeight = screenHeight * (2.8 / 4);

const screenWidth = Dimensions.get("window").width;
const boxWidth = screenWidth * (9 / 10);

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
    },
    box: {
        position: 'absolute',
        backgroundColor: primaryColor,
        width: boxWidth,
        height: boxHeight,
        borderRadius: 20,
        elevation: 5,
    },

    picture: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        alignItems: "center",
    },

    text: {
        fontWeight: "bold",
        top: boxHeight * (8 / 10),
        marginLeft: 20,
        fontSize: 24,
        position: 'absolute',
        color: 'white',
        textShadowColor: accentColor,
        textShadowRadius: 5
    },
    messageStyle: {
        left: boxWidth * 0.3,
        top: boxHeight * (1 / 2),
        fontWeight: "bold",
        fontSize: 20,
        position: 'absolute',
        color: "rgba(255,255,255,.5)",
        zIndex: -1
    }
});

export default Cards;
