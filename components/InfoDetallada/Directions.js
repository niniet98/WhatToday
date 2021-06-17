import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Directions({ steps }) {
  return (
    <View>
      <FlatList
        data={steps}
        renderItem={({ item, index }) => (
          <Text>{`${index + 1}: ${item.step}`}</Text>
          /* <Steps direction={item} /> */
        )}
        keyExtractor={(item) => String(item.number)}
        numColumns={1}
      />
      <Text>DIRECTIONS</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
