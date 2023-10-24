import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo(props) {
  return (
    <Image
      source={require("../assets/salga-logo.png")}
      style={props.type === "register" ? styles.image : styles.image2}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
  },
  image2: {
    width: 300,
    height: 300,
  },
});
