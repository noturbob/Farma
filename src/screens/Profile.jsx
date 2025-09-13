import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfilePic from "../components/ProfilePic";
import PrimaryButton from "../components/PrimaryButton";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <ProfilePic size={100} />

      <Text style={styles.name}>Farmer John</Text>
      <Text style={styles.email}>john@example.com</Text>

      <PrimaryButton title="Edit Profile" onPress={() => alert("Edit profile")} />
      <PrimaryButton title="Logout" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  name: { fontSize: 22, fontWeight: "700", marginTop: 15 },
  email: { fontSize: 16, color: "#777", marginBottom: 20 },
});
