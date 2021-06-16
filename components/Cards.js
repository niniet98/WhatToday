import { observer } from "mobx-react";
import React, { useContext, useRef } from "react";
import { Animated, PanResponder, StyleSheet, View, Image, Button, Alert, Text, IconButton, Dimensions } from "react-native";
import { ModelContext } from "../model/WhatTodayModel";

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
                <Image style={styles.picture} source={{ uri: model.randomRecipe[0].image }} />
                <Text style={styles.text}>{model.randomRecipe[0].title}, {Math.round(model.randomRecipe[0].nutrition.nutrients[0].amount)} Kcal</Text>
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
        backgroundColor: "#FC633A",
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
    }
});

export default Cards;
