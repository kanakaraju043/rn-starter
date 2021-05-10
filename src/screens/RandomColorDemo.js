import React, {useState} from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const RandomColorDemoScreen = () => {
    const [colors, setColors] = useState([])

    console.log(colors)
    return (
        <View>
            <Button
                title="Add Color"
                onPress={ () => {
                    setColors([...colors, randomColorGenerator()])
                    }
                }
            />
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({item}) => {
                  return (<View style={ {height: 100, width: 100, backgroundColor: randomColorGenerator()}}/>)  
                }       
                }
            />

        </View>
    )
}

const randomColorGenerator = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({

})

export default RandomColorDemoScreen
