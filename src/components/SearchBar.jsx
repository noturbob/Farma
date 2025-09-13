import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ placeholder, onChangeText }) {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#555" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder || "Search..."}
        placeholderTextColor="#aaa"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  icon: { marginRight: 8 },
  input: { flex: 1, height: 40, fontSize: 16 },
});
