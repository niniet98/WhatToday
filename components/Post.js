import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Demo from './Demo'

export default function Post() {
    return (
        <Demo>
            <View style={{ alignItems: "center", padding: 20 }}>
                <Image style={styles.imagePost} source={require("../assets/recipe.jpg")} />
            </View>
        </Demo>
    )
}


const size = 150;

const styles = StyleSheet.create({
    imagePost: {
        width: size,
        height: size
    }
});