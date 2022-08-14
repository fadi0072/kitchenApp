import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GlobalColors from "../../UI/GlobalColors";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeLogo: {
    width: 219,
    height: 213,
  },
  leftArrow: {
    width: 32,
    height: 32,
    top: 30,
    left: 23,
  },
  innerContainer: {
    alignItems: "center",
    marginTop: windowHeight * 0.1,
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
  startedBtn: {
    width: "80%",
    alignSelf: "center",
    bottom: "30%",
  },
  rowBtn: {
    marginHorizontal: "10%",
    justifyContent: "space-around",
  },
  foodLover: {
    width: "47%",
  },
  Chef: {
    width: "47%",
  },
  btnChef: {
    backgroundColor: GlobalColors.white,
    borderWidth: 1.0,
    borderColor: GlobalColors.mainColor,
  },
  btnChefSelected: {
    backgroundColor: GlobalColors.mainColor,
  },
  TextColor: {
    color: GlobalColors.mainColor,
  },
  SelectedTextColor: {
    color: GlobalColors.white,
  },
});
