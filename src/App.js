import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
const App = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView style={{backgroundColor: '#37474F', flex: 1}}>
      <View>
        <Text>TODO</Text>
        <Text>{counter}</Text>
      </View>
    </SafeAreaView>
  );
};
export default App;