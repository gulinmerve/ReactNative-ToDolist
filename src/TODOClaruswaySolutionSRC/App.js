import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, FlatList, KeyboardAvoidingView, StyleSheet } from 'react-native'

import { MyInput, MyButton, TodoCard } from './components'

const App = () => {
  const [todoList, setList] = useState([])
  const [entry, setEntry] = useState("")

  changeText = (text) => {
    setEntry(text)
  }

  const addTodo = () => {
    const todoElement = { text: entry }
    setList([...todoList, todoElement])
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={{ flex: 1, padding: 10 }}>

          <View style={styles.headerContainer}>
            <Text style={styles.header}>TODO</Text>
            <Text style={styles.todoCount}>{todoList.length}</Text>
          </View>

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={todoList}
            renderItem={({ item }) => <TodoCard todo={item} />}
          />

          <View style={styles.panel}>
            <MyInput textChange={changeText} />
            <MyButton myTitle="ADD TODO" myPress={addTodo} />
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#37474f' },
  // container: { flex: 1, backgroundColor: '#546e7a' },
  header: { fontSize: 45, fontWeight: 'bold', color: '#ffa726' },
  todoCount: { fontSize: 30, color: '#ffa726' },
  headerContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  panel: { backgroundColor: '#b0bec5', borderRadius: 20, padding: 5 }
})