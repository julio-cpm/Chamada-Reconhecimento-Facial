import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function Login({ navigation }) {
  const fazerLogin = () => {
      navigation.replace("DrawerRoutes");
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Usuário" style={styles.input}/>
      <TextInput placeholder="Senha" style={styles.input}/>
      <Button title="Entrar" onPress={fazerLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});