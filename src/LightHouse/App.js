import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Alert, Image } from "react-native";
import TodoItem from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/addTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const todo_num = todos.length;

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length < 3) {
      Alert.alert("Lighthouse-Team Todo App", "Please enter todo!!")
    }
    else {
      setTodos((prevTodos) => {
        return [
          { key: todos.length, todo: text, isDone: false },
          ...prevTodos
        ];
      })
    }
  }

  useEffect(() => {
    Alert.alert("Lighthouse-Team", "Welcome to our todo app ver.0.95!")
  }, [])

  return (
    <View style={styles.container}>
      <Header item={todo_num} />
      <AddTodo submitHandler={submitHandler} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} pressHandler={pressHandler} />
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e272e",
    flex: 1,
  },
});
