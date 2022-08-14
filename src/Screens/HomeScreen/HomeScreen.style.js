import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GlobalColors from "../../UI/GlobalColors";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  Heading: {
    fontSize: 30,
  },
  container: {
    marginTop: windowHeight * 0.1,
    padding: 12,
  },
  subHeading: {
    opacity: 0.6,
    fontSize: 16,
  },
  search: {
    width: 20,
    height: 20,
  },
  txt: {
    fontSize: 18,
  },
  menuDiv: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.46,
  },
});
