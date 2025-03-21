import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import data from "./data.json";

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to the Home Screen!</Text>
//     </View>
//   );
// };

// const showList = (items) => {
//   return items.map((item) => {
//     const date = new Date(item.createdAt);
//     const timestamp =
//       date.toLocaleDateString() + " " + date.toLocaleTimeString();

//     return [
//       <View key={item._id} style={styles.itemContainer}>
//         <Text style={styles.title}>{item.title}</Text>,
//         <Text style={styles.description}>{item.description}</Text>,
//         <Text>
//           By: {item.user} - Comments: {item.commentCount}
//         </Text>
//         ,<Text style={styles.meta}>{timestamp}</Text>,
//       </View>,
//     ];
//   });
// };

const HomeScreen = () => {
  const showList = ({ item }) => {
    const date = new Date(item.createdAt);
    const timestamp =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();

    return [
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text>
          By: {item.user} - Comments: {item.commentCount}
        </Text>
        <Text style={styles.meta}>{timestamp}</Text>
      </View>,
    ];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List (Map)</Text>
      <FlatList
        data={data}
        renderItem={showList}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
  meta: {
    fontSize: 12,
    color: "#666",
  },
});

export default HomeScreen;
