import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import { StyleSheet, Dimensions } from "react-native";
import GlobalColors from "../../UI/GlobalColors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  mainView: {
    alignSelf: "center",
    //width: 356,
    //  height: 316,
    width: windowWidth * 0.85,
    height: windowHeight * 0.48,
    backgroundColor: GlobalColors.white,
    opacity: 0.9,
    padding: windowWidth * 0.06,
    borderRadius: 60,
  },
  dpRecipt: {
    width: 93,
    height: 93,
  },
  info: {
    marginTop: windowHeight * 0.02,
  },
  receiptTxt: {
    fontSize: 13,
    fontFamily: "OpenSans_400Regular",
    COLOR: "#3A3A3A",
    lineHeight: 18,
  },
  receiptTxtName: {
    fontSize: 16,
    fontFamily: "OpenSans_400Regular",
    COLOR: "#3A3A3A",
    lineHeight: 22,
  },
  stars: {
    top: windowHeight * 0.004,
    width: 66.91,
    height: 11.54,
  },
  time: {
    right: 8,
    width: 8.86,
    height: 8.86,
  },
  serving: {
    left: 8,
    width: 15.86,
    height: 11.58,
  },
  timeView: {
    alignSelf: "center",
  },
  timeTxt: {
    fontSize: 7,
    lineHeight: 8.2,
  },
  servingTxt: {
    left: 15,
    fontSize: 7,
    lineHeight: 8.2,
  },
  inteText: {
    marginRight: windowWidth * 0.1,
  },
  marginInte: {
    margin: "1%",
  },
  txtInte: {
    fontSize: 12,
    color: "#707070",
    lineHeight: 14,
  },
  txtInte2: {
    fontSize: 12,
    color: "#707070",
    left: 20,
    lineHeight: 14,
  },
});
