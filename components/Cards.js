import { observer } from "mobx-react";
import React, { useContext, useRef } from "react";
import { Animated, PanResponder, StyleSheet, View, Image, Button, Alert, Text, IconButton, Dimensions } from "react-native";
import { ModelContext } from "../model/WhatTodayModel";

const DraggableView = observer(() => {
    const model = useContext(ModelContext);
    //-------------------//
    const pan = useRef(new Animated.ValueXY()).current;

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
    });

    return (
        <View style={styles.container}>

            <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.box]}>
                <Image style={styles.picture} source={{ uri: model.randomRecipe[0].image }} />
                <Text style={styles.text}>{model.randomRecipe[0].title}, {model.randomRecipe[0].nutrition.nutrients[0].amount} Kcal</Text>
            </Animated.View>
            <View style={styles.butcontainer}>
                <View style={styles.button}>
                    <Button
                        title="Dislike"
                        onPress={() => model.loadRandomRecipe()}
                    />
                    <Button
                        title="Like"
                        onPress={() => {
                            model.addFavRecipe(model.randomRecipe[0].id, model.randomRecipe[0].title);
                            model.loadRandomRecipe();
                        }}
                    />
                </View>
            </View>
        </View>
    );
});

const screenHeight = Dimensions.get("window").height;
const boxHeight = screenHeight*(14/19);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -580,
        marginLeft: 20,
    },
    box: {
        position: 'absolute',
        backgroundColor: "#61dafb",
        width: 350,
        height: boxHeight,
        borderRadius: 20,
    },

    picture: {
        width: 350,
        height: '100%',
        borderRadius: 20,
        alignItems: "center",
    },
    butcontainer: {
        marginBottom: -555,
        marginLeft: 0,
        alignContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 360,
    },
    button: {
        width: 200,
        padding: 6,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    text: {
        fontWeight: "bold",
        marginTop: 480,
        marginLeft: 20,
        fontSize: 24,
        position: 'absolute',
        color: 'white',
    }
});

export default DraggableView;
