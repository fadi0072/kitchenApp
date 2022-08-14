import { StyleSheet, Dimensions } from "react-native";
import GlobalColors from "../../UI/GlobalColors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginTop: windowHeight * 0.035,
    marginBottom: windowHeight * 0.015,
    borderRadius: 10,
    elevation: 3.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  input: {
    borderColor: GlobalColors.mainColor,
    height: windowHeight * 0.072,
    borderWidth: 1.0,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
  },
  inputWidth: {
    width: "100%",
  },
});
