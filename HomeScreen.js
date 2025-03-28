import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { API_URL } from "@env";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/tasks`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (title === "" || description === "") {
      alert("Fill in something");
      return;
    }
    
    try {
      const res = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      // if (res.ok) {
        const newTask = await res.json();
        setData((prevData) => [...prevData, newTask]);
        setTitle("");
        setDescription("");
      // }
    } catch (error) {
      console.log(error);
    }
  };

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

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List (Map)</Text>
      <FlatList
        data={data}
        renderItem={showList}
        keyExtractor={(item) => item._id}
      />
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.btn}>Sumbit</Text>
      </TouchableOpacity>
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
  btn: {
    fontSize: 18,
    color: "white",
    marginTop: 20,
    padding: 15,
    backgroundColor: "red",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default HomeScreen;
