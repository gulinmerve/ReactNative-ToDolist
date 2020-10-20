import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const TodoCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.todo.text}</Text>
        </View>
    );
}

export { TodoCard };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#546e7a',
        padding: 10,
        margin: 5,
        borderRadius: 10
    },
    text: {
        fontSize: 17,
        color: 'white'
    }
})