import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GlobalColors from "../../UI/GlobalColors";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
export default StyleSheet.create({
  leftArrow: {
    width: 16,
    height: 14,
    top: 40,
    left: 23,
  },
  recipeName: {
    fontFamily: "Cookie_400Regular",
    fontSize: windowWidth * 0.12,
    lineHeight: 44.36,
    color: GlobalColors.white,
    top: windowHeight * 0.12,
    left: windowWidth * 0.09,
    width: windowWidth * 0.6,
  },
  recipeCard: {
    marginTop: windowHeight * 0.16,
  },
});
