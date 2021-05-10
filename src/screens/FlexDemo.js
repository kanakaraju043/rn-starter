import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const FlexDemoScreen = () => {
    return (
        <View style={
            {
                backgroundColor: 'red',
                flex: 1,
                flexDirection: "row-reverse",
                alignItems: "stretch",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                // alignContent: "flex-end"
                // flexBasis: 100,
            }
        }>
            <View
                style={{
                    width: 100,
                    height: 100,
                    borderColor: 'dodgerblue',
                    borderWidth: 1,
                    backgroundColor: 'dodgerblue',
                    flexGrow: 1,
                    // flexShrink: 1
                }}
            />
            <View
                style={{
                    width: 100,
                    height: 100,
                    borderColor: 'gold',
                    borderWidth: 1,
                    backgroundColor: 'gold',
                    bottom: 20,
                    position: "absolute"
                }}
            />
            <View
                style={
                    {
                        width: 100,
                        height: 100,
                        borderColor: 'tomato',
                        borderWidth: 1,
                        backgroundColor: 'blue',
                        alignSelf: "auto"
                    }}
            />
            <View
                style={
                    {
                        width: 100,
                        height: 100,
                        borderColor: 'tomato',
                        borderWidth: 1,
                        backgroundColor: 'tomato',
                        alignSelf: "auto"
                    }}
            />
            <View
                style={
                    {
                        width: 100,
                        height: 100,
                        borderColor: 'tomato',
                        borderWidth: 1,
                        backgroundColor: 'gray',
                        alignSelf: "auto"
                    }}
            />
            <View
                style={
                    {
                        width: 100,
                        height: 100,
                        borderColor: 'tomato',
                        borderWidth: 1,
                        backgroundColor: 'purple',
                        alignSelf: "auto"
                    }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default FlexDemoScreen