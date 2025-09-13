import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import PrimaryButton from "../components/PrimaryButton";

const sampleProducts = [
  { id: "1", name: "Fresh Tomatoes", price: "₹50/kg" },
  { id: "2", name: "Organic Apples", price: "₹120/kg" },
  { id: "3", name: "Potatoes", price: "₹30/kg" },
  { id: "4", name: "Milk (1L)", price: "₹45" },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === "") {
      setFilteredProducts(sampleProducts);
    } else {
      setFilteredProducts(
        sampleProducts.filter((item) =>
          item.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marketplace</Text>

      {/* 🔍 Search Bar */}
      <SearchBar
        placeholder="Search for fruits, vegetables..."
        onChangeText={handleSearch}
      />

      {/* 📦 Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <PrimaryButton title="Add to Cart" onPress={() => alert(`${item.name} added!`)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 10 },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  productName: { fontSize: 18, fontWeight: "600" },
  productPrice: { fontSize: 16, color: "#28A745", marginVertical: 5 },
});
