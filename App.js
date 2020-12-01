import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log("shit!");
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Button title="+" onPress={increment} style={styles.button}></Button>
      <Button title="reset" onPress={reset} style={styles.button}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 50,
    color: 'skyblue',
  },
});
