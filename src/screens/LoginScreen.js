import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const loginScreen = () => {
    const name = 'Kanakaraju'
    return <View>
        <Text style = {styles.headerTextStyle}>Getting started with react native!</Text>
        <Text style = {styles.subHeaderTextStyle}>My name is {name}</Text>
        </View>
}

const styles = StyleSheet.create({
    headerTextStyle: {
        fontSize: 45
    },
    subHeaderTextStyle: {
        fontSize: 20
    }
})

export default loginScreen