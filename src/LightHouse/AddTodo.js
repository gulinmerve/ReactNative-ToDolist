import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  function keyPress(e) {
    if (e.keyCode == 13) {
      e.target.changeHandler;
    }
  }

  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        keyboardType="default"
        placeholder="new todo..."
        placeholderTextColor="#777"
        onSubmitEditing={() => {
          submitHandler(text);
          setText("");
        }}
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          submitHandler(text);
          setText("");
        }}>
        <Text style={styles.buttonText}>ADD TODO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#00a8ff",
    color: "#e2e2e2",
    textDecorationColor: "#e2e2e2",
  },
  button: {
    margin: 20,
    padding: 10,
    backgroundColor: "#ff3f34",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    color: "#e2e2e2",
  },
});
