import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress = {() => navigation.navigate('List')
        }
        title = 'navigate to list'
        />
        <Button
        title = "Navigate to Login screen"
        onPress = { () => navigation.navigate('Login')
        }
        />

        <Button
           title = "Navigate to component screen"
           onPress = { () => navigation.navigate('Components')
      }
    />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
