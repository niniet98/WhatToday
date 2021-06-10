import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Demo from './Demo'

//---------------------------------//

const iterations = 10;
const textSize = 64;
const shadowBlur = 2;
const primaryColor = "#FC633A";

//---------------------------------//

const textsGenerator = (iter, element) => {
    let textsArray = [];
    for (let i = 0; i < iter; i++) {
        textsArray.push(element);
    }
    return textsArray;
};

//---------------------------------//

export default function Title({ children }) {

    const shadowText = <Text style={[styles.text, styles.absolutPosition]}>{children}</Text>;
    const shadowContent = textsGenerator(iterations, shadowText);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {children}
            </Text>
            {shadowContent}
        </View>
    )

}

//---------------------------------//

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        /* backgroundColor: 'blue', */
    },
    text: {
        color: "white",
        fontSize: textSize,
        lineHeight: textSize * 1.2,
        fontFamily: 'Poppins-Bold',
        textShadowColor: primaryColor,
        textShadowRadius: shadowBlur,
        marginVertical: 25,
    },
    absolutPosition: {
        position: "absolute",
    },
});