import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.text}>App Name: To-Do App</Text>
        <Text style={styles.text}>Developer: Trupesh Mandani</Text>
        <Text style={styles.text}>Date: {currentDate}</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AboutScreen;
