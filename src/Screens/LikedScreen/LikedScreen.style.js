import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GlobalColors from "../../UI/GlobalColors";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  headerMain: {
    padding: windowHeight * 0.03,
    backgroundColor: GlobalColors.mainColor,
    // height: 170,
    height: windowHeight * 0.23,
  },
  search: {
    width: 17.51,
    height: 17.51,
    alignSelf: "center",
    marginHorizontal: windowWidth * 0.006,
  },
  fvrtTxt: {
    top: 15,
  },
});
