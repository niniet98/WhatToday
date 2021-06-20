import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Slider from "../icons/slider1";

export default function Directions({ extendedIngredients }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredients</Text>
      <FlatList
        data={extendedIngredients}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.ingredientsContainer}>
            <View style={[styles.img, { elevation: 20 }]}><Image style={styles.img} source={{ uri: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}` }} /></View>
            <Text style={styles.ingredientText}>{item.name}</Text>
            <Text style={[styles.ingredientText, { fontWeight: 'bold' }]}>{item.measures.metric.amount}{item.measures.metric.unitShort}</Text>
          </View>
        )}
        numColumns={3}
      />
      {/* sentim fer-ho així de cutre però no ens funcionava i 
        d'alguna manera havíem d'indicar que es podia fer scroll horitzontal */}
      <Slider style={{ marginVertical: 20 }} />

    </View>
  );
}
const imageSize = 60;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },
  ingredientsContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    width: '20%',
    paddingBottom: 10
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    backgroundColor: 'white',
  },
  ingredientText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'normal',
    zIndex: 4,
    textAlign: 'center'

  },
});