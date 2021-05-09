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
      <Button
        title="Navigate to image list screen"
        onPress={ () => navigation.navigate('ImageList')
        }
      />
      <Button
        title="Navigate to Flex screen"
        onPress={ () => navigation.navigate('FlexDemo')
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
