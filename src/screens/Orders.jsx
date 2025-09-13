import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const sampleOrders = [
  { id: "1", item: "Fresh Tomatoes", date: "12 Sep 2025", status: "Delivered" },
  { id: "2", item: "Organic Apples", date: "10 Sep 2025", status: "Pending" },
];

export default function Orders() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>

      <FlatList
        data={sampleOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.item}>{item.item}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text
              style={[
                styles.status,
                { color: item.status === "Delivered" ? "green" : "orange" },
              ]}
            >
              {item.status}
            </Text>
          </View>
        )}
      />
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
  item: { fontSize: 18, fontWeight: "600" },
  date: { fontSize: 14, color: "#777" },
  status: { fontSize: 16, marginTop: 5, fontWeight: "600" },
});
