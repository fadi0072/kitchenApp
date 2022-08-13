import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  welcomeLogo: {
    width: windowWidth * 0.65,
    height: windowHeight * 0.3,
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    alignItems: "center",
    marginTop: windowHeight * 0.15,
  },
  welcomeText: {
    marginTop: windowHeight * 0.04,
  },
  para: {
    width: windowWidth * 0.7,
    fontFamily: 16,
  },
  info: {
    marginTop: 12,
    fontSize: 18,
  },
});
