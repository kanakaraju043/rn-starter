import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ImageScreen from './ImageScreen'
ImageScreen
const ImageListScreen = () => {
    return (
        <View style = {styles.listStyle}>
            <ImageScreen title = "Forecast" />
            <ImageScreen title = "Cloudy" />
            <ImageScreen title = "Maggy" />
            <ImageScreen title = "Suny" />
            <ImageScreen title = "Cloudy" />

        </View>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        marginVertical: 20
    }
})

export default ImageListScreen