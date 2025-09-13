import React from "react";
import { Image, StyleSheet } from "react-native";

export default function ProfilePic({ uri, size = 60 }) {
  return (
    <Image
      source={
        uri
          ? { uri }
          : { uri: "https://via.placeholder.com/150/cccccc/000000?text=User" }
      }
      style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderWidth: 2,
    borderColor: "#28A745",
  },
});
