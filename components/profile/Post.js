import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Demo from '../Demo'

export default function Post() {
    return (

        <Image style={styles.imagePost} source={require("../assets/recipe.jpg")} />

    )
}


const size = 150;

const styles = StyleSheet.create({
    imagePost: {
        width: size,
        height: size
    }
});