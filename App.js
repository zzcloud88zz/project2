import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from "react-native";
import CounterText from './CounterText';

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log("up");
    setCount(count + 1);
  }

  function decrement() {
    console.log("down");
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function renderEncouragingText() {
    if (count == 10) {
      return "Keep going!";
    }
    else if (count == 20) {
      return "Stop clicking Me!";
    }
    else if (count == 30) {
      return "Oi!";
    }
  }

  return (
  <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert('HAHAHA!')} style={styles.container}>

    <View>
      <CounterText color="lightgrey" fontSize={10} marginBottom={50}>{count}</CounterText>
      <CounterText color="lightblue" fontSize={30} marginBottom={50}>{count}</CounterText>
      <CounterText color="blue" fontSize={60} marginBottom={50}>{count}</CounterText>
      <CounterText color="navy" fontSize={90} marginBottom={50}>{count}</CounterText>
        <TouchableOpacity style={styles.button}><Text onPress={increment} style={styles.buttontext}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text onPress={decrement} style={styles.buttontext}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text onPress={reset} style={styles.buttontext}>reset</Text></TouchableOpacity>
      <Text style={styles.encouragingText}>{renderEncouragingText()}</Text>
      <StatusBar style="auto" />
    </View>

    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
  },
  button: {
    backgroundColor: "tomato",
    margin: 5,
    padding: 5,
    width: 200,
    borderRadius: 10,
  },
  buttontext: {
    color: "white",
    fontSize: 50,
    textAlign: "center",
  },
  encouragingText: {
    margin: 5,
    color: "#A9A9A9",
    fontSize: 30,
    textAlign: "Center",
  },
});
