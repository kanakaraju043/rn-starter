import React, {useState} from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'


const InputFieldDemo = () => {
    const [name, setName] = useState('')
    return (
        <View>
            <Text>Please enter text</Text>
            <TextInput
                style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                value = {name}
                onChangeText={(newValue) => {
                        setName(newValue)
                    }
                }
            
            />
            <Text>Entered text is: { name}</Text>

            { name.length > 5 ? <Text>Hello world</Text> : null }
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        margin: 15,
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10
    }
})
export default InputFieldDemo