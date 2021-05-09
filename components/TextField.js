import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Demo from "./Demo";

export default function TextBox({ blank }) {
  const [text, setText] = useState("");

  return (
    <Demo blank={blank}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="User or email"
          placeholderTextColor='white'
          value={text}
          onChangeText={(newText) => setText(newText)}
        />
        {/*<Text>{text}</Text>*/}
      </View>
    </Demo>
  );
}

const styles = StyleSheet.create({
  textInput: {
    color: "#fff",
    marginLeft: 20,
    borderBottomWidth: 0.1,
    borderColor: "#fff1ff",
  },
  container: {
    color: "#ffff",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});