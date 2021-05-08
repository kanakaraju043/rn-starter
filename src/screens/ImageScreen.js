import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'

const ImageScreen = ({title}) => {
    return (
        <View style = {styles.containerStyles}>
            <Image
                style={styles.imageStyles}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Text style = {styles.titleTextStyles}> {title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyles: {
        width: 60,
        height: 60,
        margin: 10
    },
    titleTextStyles: {

        fontSize: 16,
        marginTop: 10
    },
    containerStyles: {
        flexDirection: 'row',
        margin: 10,
        borderColor: 'black',
        borderWidth: .5,
        borderRadius: 10
    }
})

export default ImageScreen