import React from 'react'
import { Text,View, StyleSheet, FlatList } from 'react-native'

const listScreen = () => {
    const friendsArray = [
        { name: "Raju"},
        { name: "Kanak1"},
        { name: "Gandreddi"},
        { name: "Naidu"},
        { name: "Hemu"},
        { name: "Lakshay"},
        { name: "Leela"},
        { name: "Satish"},
        { name: "Sudheer"},
    ];

    return (
      <FlatList
            keyExtractor = {friend => friend.name}
            data = {friendsArray}
            renderItem = {({item}) => {
                    return <Text style = { styles.textStyle }>{item.name}</Text>
                }
            }
        
      />  
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default listScreen