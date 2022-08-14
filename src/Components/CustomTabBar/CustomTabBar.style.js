import { Dimensions, StyleSheet } from "react-native";
import GlobalColors from "../../UI/GlobalColors";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const CustomTabBar_styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: windowHeight * 0.1,
    elevation: 20,
    shadowColor: "#F0580433",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    backgroundColor: GlobalColors.white,
    paddingBottom: "3.5%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  recipeStyle: {
    height: 44,
    width: 56,
    bottom: 5,
  },

  TabBarIcon: {
    height: 21,
    width: 24,
  },
  childContainer: {
    marginTop: "2%",

    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
export default CustomTabBar_styles;
