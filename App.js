import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Press Here To Change');

  return (
    <View style={styles.container}>
      <Text classname="text">{outputText}</Text>
      <StatusBar style="auto" />
      <Button title="Change text" onPress={() => setOutputText('The text changed!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },  
});
