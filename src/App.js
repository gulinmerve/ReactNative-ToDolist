import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const App = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView style={style.container}>
      <View style={style.todoView}>
        <Text style={style.todo}>TODO</Text>
        <Text style={style.todoCounter}>{counter}</Text>
      </View>
      <View style={style.addContainer}>
        <TextInput style={style.inputContainer}></TextInput>
        <TouchableOpacity style={style.addButton}>
          <Text style={style.textButton}>ADD TODO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
