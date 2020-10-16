import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";

export default function Header({ item }) {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={require('./img/2.png')} />
      <Text style={[styles.header,]}>My Todos</Text>
      <Text style={styles.todo_count}>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffa801",
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  todo_count: {
    fontSize: 35,
    color: "#e2e2e2",
    alignSelf: "center",
    fontWeight: "bold",
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 10,

  }
});