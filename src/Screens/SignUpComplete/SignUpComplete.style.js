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
    left: 23
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
  startedBtn: {
    width: '80%',
    alignSelf: 'center',
  },
  rowBtn: {
    justifyContent: 'space-evenly'
  },
  foodLover: {
    width: '35%'
  },
  Chef: {
    width: '35%',
  },
  btnChef: {
    backgroundColor: GlobalColors.white
  },
  textcolor: { color: GlobalColors.mainColor }
});
