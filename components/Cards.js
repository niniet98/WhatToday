import { observer } from "mobx-react";
import React, { useContext, useRef } from "react";
import { Animated, PanResponder, StyleSheet, View, Image, Button, Alert, Text, IconButton } from "react-native";
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
                <Image style={styles.picture} source={{ uri: model.randomList[0].image }} />
                <Text style={styles.text}>{model.randomList[0].title}</Text>
            </Animated.View>
            <View style={styles.butcontainer}>
                <View style={styles.button}>
                    <Button
                        title="KK"
                        onPress={() => Alert.alert('Left button pressed')}
                    />
                    <Button
                        title="LIKE"
                        onPress={() => model.addFavRecipe(model.randomList[0].id, model.randomList[0].title)}
                    />
                </View>
            </View>
        </View>
    );
});

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
        height: 550,
        borderRadius: 20,
    },

    picture: {
        width: 350,
        height: 550,
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
        marginTop: 480,
        marginLeft: 20,
        fontSize: 24,
        position: 'absolute',
        color: 'white',
    }
});

export default DraggableView;
