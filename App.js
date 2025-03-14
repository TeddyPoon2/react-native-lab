import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


const App = () => {
  const nav = useNavigation()
  
  const login = () => {
    nav.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} secureTextEntry placeholder="Password" />
      <TouchableOpacity onPress={login}>
        <Text style={styles.loginBtn}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    paddingInline: 10,
  },
  loginBtn: {
    fontSize: 18,
    color: "white",
    marginTop: 20,
    padding: 15,
    backgroundColor: "red",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
  }
});

export default App;
