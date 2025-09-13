// src/screens/Cart.jsx
import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { AppContext } from "../context/AppContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.product}>{item.name}</Text>
              <Text style={styles.details}>
                ₹{item.price} × {item.quantity}
              </Text>
              <PrimaryButton
                title="Remove"
                onPress={() => removeFromCart(item.id)}
              />
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 20 },
  card: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 12,
  },
  product: { fontSize: 18, fontWeight: "600" },
  details: { fontSize: 16, color: "#555" },
});
