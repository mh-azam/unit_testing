import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{`Count: ${count}`}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  count: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});

export default Counter;
