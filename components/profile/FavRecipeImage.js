import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';


const width = Dimensions.get('window').width;

export default function FavRecipeImage({ image }) {
    return (
        <View>
            <Image style={styles.image} source={{ uri: image }} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: width / 3,
        height: width / 3,
        resizeMode: "cover",
        borderWidth: 1,
        borderColor: 'white'
    }
})
