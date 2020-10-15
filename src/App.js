import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const list = [];
const App = (props) => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const [, delItem] = useState();
  // const [, addItem] = useState();
  // const updateCounter = () => setCounter(counter + 1);
  // const addItem = () => {};
  function addItem() {
    list.push(text);
  }
  // list.splice(list.indexOf(item),1)
  return (
    <SafeAreaView style={style.container}>
      <View style={style.todoView}>
        <Text style={style.todo}>TODO</Text>
        <Text style={style.todoCounter}>{counter}</Text>
      </View>
      <ScrollView>
        {list.map((item) => {
          return (
            <View style={style.todoContainer}>
              <Text style={style.todoText}>{item}</Text>
              <TouchableOpacity
                style={style.close}
                onPress={() => {
                  delItem(list.splice(list.indexOf(item), 1));
                  setCounter(counter - 1);
                }}>
                <Text style={style.closeText}>X</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View style={style.addContainer}>
        <TextInput
          style={style.inputContainer}
          defaultValue={text}
          onChangeText={(text) => setText(text)}
          returnKeyType={'next'}
          blurOnSubmit={true}
          onSubmitEditing={() =>
            text == ''
              ? console.warn('Please enter a todo')
              : addItem(list.push(text))
          }
        />
        <TouchableOpacity
          style={style.addButton}
          onPress={() => {
            text == '' ? console.warn('Please enter a todo') : addItem();
            text == '' ? setCounter(counter) : setCounter(counter + 1);
            setText('');
          }}>
          <Text style={style.textButton}>ADD TODO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.addButton}
          onPress={() => {
            delItem(list.splice(0));
            setCounter(0);
          }}>
          <Text style={style.textButton}>RESET</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default App;
const style = StyleSheet.create({
  container: {
    backgroundColor: '#37474f',
    flex: 1,
    justifyContent: 'space-between',
  },
  todoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  },
  todo: {fontSize: 40, fontWeight: 'bold', color: '#ffa726'},
  todoCounter: {fontSize: 25, fontWeight: 'bold', color: '#ffa726'},
  todoContainer: {
    backgroundColor: '#546e7a',
    margin: 10,
    borderRadius: 10,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 15,
    paddingVertical: 10,
  },
  close: {
    position: 'absolute',
    right: 2,
    top: -9,
    backgroundColor: '#eceff1',
    borderRadius: 20,
    height: Dimensions.get('window').height * 0.03,
    width: Dimensions.get('window').width * 0.05,
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  addContainer: {
    backgroundColor: '#b0bec5',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 30,
    borderRadius: 20,
  },
  inputContainer: {backgroundColor: 'white', margin: 20, borderRadius: 10},
  addButton: {
    marginHorizontal: 120,
    backgroundColor: '#7e8d94',
    borderRadius: 10,
    marginBottom: 10,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    color: 'white',
  },
});