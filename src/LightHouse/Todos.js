/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";


export default function TodoItem({ item, pressHandler }) {

  return (
    <TouchableOpacity
      style={styles.todos}>
      <Text style={styles.text}>{item.todo} </Text>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todos: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#485460",
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    padding: 5,
    paddingLeft: 10,
    flexDirection: "row",
  },
  text: {
    flex: 1,
    color: "#e2e2e2",
    fontWeight: "bold",
    alignSelf: "center"
  },
  delete: {
    backgroundColor: "red",
    opacity: 0.9,
    color: "#e2e2e2",
    fontWeight: "bold",
    padding: 5,
    margin: 5,
    borderRadius: 5,
  }
})