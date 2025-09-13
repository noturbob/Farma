import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HamburgerMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🍔 Menu Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#eee", borderRadius: 10 },
  text: { fontSize: 16, fontWeight: "500" },
});
