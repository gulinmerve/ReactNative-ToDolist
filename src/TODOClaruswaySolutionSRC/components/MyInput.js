import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const MyInput = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                keyboardType={props.type}
                autoCapitalize="none"
                placeholder={props.myPlace}
                onChangeText={props.textChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#eceff1',
        padding: 10,
        margin: 20,
        borderRadius: 10,
    }
})

export { MyInput }