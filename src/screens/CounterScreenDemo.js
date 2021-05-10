import React, {useState} from 'react';
import { Text, Button, StyleSheet,View } from 'react-native';

const CounterScreenDemo = () => {

    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button
                title="Increase counter"
                onPress={() => {
                    setCounter(counter+1)
                    console.log(counter)
                    }
                }
            />
            <Button
                title="Decrease counter"
                onPress={() => {
                    setCounter(counter-1)
                    console.log(counter)

                    }
                }
            />

            <Text>Current count is: { counter} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {

    }
})

export default CounterScreenDemo