import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';


const width = Dimensions.get('window').width;

const FavRecipeImage = observer(({ image }) => {
    return (
        <View>
            <Image style={styles.image} source={{ uri: image }} />
        </View>
    )
});

export default FavRecipeImage;

const styles = StyleSheet.create({
    image: {
        width: width / 3,
        height: width / 3,
        resizeMode: "cover",
        borderWidth: 1,
        borderColor: 'white'
    }
})
