import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Slider from "../icons/slider2";

export default function Directions({ steps }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Directions</Text>
      <FlatList
        data={steps}
        renderItem={({ item, index }) => (
          <Text style={styles.steps}>{`${index + 1}: ${item.step}`}</Text>
          /* <Steps direction={item} /> */
        )}
        keyExtractor={(item) => String(item.number)}
        numColumns={1}
      />
      {/* sentim fer-ho així de cutre però no ens funcionava i 
      d'alguna manera havíem d'indicar que es podia fer scroll horitzontal */}
      <Slider style={{ marginVertical: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },
  steps: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 20,
    marginVertical: 5
  }
});
