import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";

export default function NotificationSlider({ message }) {
  const [visible, setVisible] = useState(true);
  const translateY = new Animated.Value(-100);

  if (visible) {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }

  return (
    visible && (
      <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
        <Text style={styles.text}>{message}</Text>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Text style={styles.close}>✖</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#28A745",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  },
  text: { color: "#fff", fontSize: 16 },
  close: { color: "#fff", fontSize: 18, marginLeft: 10 },
});
