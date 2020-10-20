import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import {main} from './styles';
import TodoInput from './components/TodoInput';

const Main = () => {
  const [list, setList] = useState([]);
  function addTodo(text) {
    const element = {
      id: list.length,
      todo: text,
      // todo, Böyle de yazılabilir.
      isDone: false,
    };
  }
  return (
    <SafeAreaView style={main.container}>
      <KeyboardAvoidingView behavior="padding" style={main.container}>
        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoCount}>10</Text>
        </View>
        {/* Flatlist Bulunduğu yeri kaplar */}
        <FlatList data={[]} renderItem={() => null} />
        <TodoInput onTodoEnter={(todoText) => addTodo(todoText)} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Main;

// Android için:
// // <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'android' ? null : 'padding'}>
// //   <ScrollView style={{ flex: 1 }} bounces={false}>
// //   </ScrollView>
// // </KeyboardAvoidingView>
