import { StyleSheet, Dimensions } from "react-native";
import GlobalColors from "../../UI/GlobalColors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.mainbackgroundColor,
    paddingHorizontal: windowWidth * 0.1,
  },
  innerContainer: {
    marginTop: windowHeight * 0.15,
    alignItems: "center",
  },
  mainHiding: {
    fontSize: 50,
    fontFamily: "Ranga_700Bold",
    lineHeight: 73.15,
    color: GlobalColors.mainColor,
    textShadowColor: "rgba(0, 0, 0, 0.65)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 1,
  },
  textView: {
    alignSelf: "center",
  },
  textsignwith: {
    textAlign: "center",
    marginVertical: windowHeight * 0.01,
  },
  btnview: {
    borderColor: GlobalColors.mainColor,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    width: 67.62,
  },
  google: {
    height: 30,
    width: 27.63,
  },
  fb: {
    height: 30,
    width: 24,
  },
  twitter: {
    height: 30,
    width: 36.77,
  },
  LoginView: {
    justifyContent: "space-between",
    marginHorizontal: windowHeight * 0.05,
  },
  accountView: {
    justifyContent: "center",
    marginTop: windowHeight * 0.03,
  },
  signUp: {
    fontSize: 18,
    lineHeight: 21,
    color: GlobalColors.mainColor,
    fontFamily: "WorkSans_400Regular",
  },
});
