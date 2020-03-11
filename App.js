import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { styles, buttons } from './style'

export default function App() {

  const [testText, changeText] = useState('')

  const textChanger = (newText) => {
    changeText(newText)
    console.log(testText)
  }

  const pressHandler = () => {
    console.log("CLick")
  }

  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="eskeddihngton"
          style={styles.inputText}
          onChangeText={textChanger}
        />
        <Button title="ADD" onPress={pressHandler} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="eskeddihngton" style={styles.inputText} />
        <Button title="ADD" />
      </View>
    </View>
  );
}
