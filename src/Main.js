import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import { main } from './styles';
import TodoInput from './components/TodoInput';

const Main = () => {
    return (
        <SafeAreaView style={main.container}>
            <View style={main.container}>

                <View style={main.banner}>
                    <Text style={main.todoText}>TODO</Text>
                    <Text style={main.todoCount}>10</Text>
                </View>
                {/* Flatlist Bulunduğu yeri kaplar */}
                <FlatList
                  data={[]}
                  renderItem ={()=> null}
                /> 
                <TodoInput
                    onTodoEnter={todoText => alert(todoText)}
                />

            </View>
        </SafeAreaView>
    );
}

export default Main;