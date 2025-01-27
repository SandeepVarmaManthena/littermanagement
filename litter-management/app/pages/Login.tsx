import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pass,SetPass] = useState(true)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Image
        source={require("../../assets/images/pana.png")} // Replace with the actual path to your image
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.input}>
        <TextInput
            placeholder="Password"
            secureTextEntry={pass}
            value={password}
            onChangeText={(text) => setPassword(text)}
        />
        <AntDesign name="eye" size={24} color="black" onPress={() => SetPass(!pass)}/>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E88E5",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 24,
    textAlign: "center",
  },
  image: {
    width: 250,
    height: 180,
    resizeMode: "contain",
    marginBottom: 24,
  },
  input: {
    width: "90%",
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent : 'space-between'
  },
  button: {
    backgroundColor: "#1E88E5",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;