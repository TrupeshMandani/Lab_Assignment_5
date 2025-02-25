import React from "react";
import { View, StyleSheet } from "react-native";

const MainLayout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default MainLayout;
