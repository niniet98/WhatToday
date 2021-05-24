import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const width = Dimensions.get('window').width;

export default function GetRecipe({ item }) {
    const [recipe, setRecipe] = useState(null);

    const loadRecipe = async () => {
        const response = await fetch(`${URL_BASE}/recipes/${item.id}/information/?apiKey=6b7427f391974de5921bcd793e67086e`);
        const json = await response.json();
        setRecipe(json);
    };

    useEffect(() => {
        loadRecipe();
    }, []);


    /* if (recipe === null) {
        return <View style={styles.emptylist}>
            <ActivityIndicator size="large" color="#aab" />
        </View>
    } */
    return (
        <View>
            {/* <Text>{recipe.title}</Text> */}
            <Image style={styles.image} source={{ uri: item.image }} />
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
