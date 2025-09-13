import React from "react";
import { Image, StyleSheet } from "react-native";

export default function ProfilePic({ uri, size = 60 }) {
  return (
    <Image
      source={
        uri
          ? { uri }
          : require("../assets/bobby.jpeg") // ✅ correct relative path
      }
      style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
      resizeMode="cover"
      onError={(e) => console.log("ProfilePic load error:", e.nativeEvent)}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderWidth: 2,
    borderColor: "#28A745",
  },
});
