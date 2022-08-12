import { StyleSheet, Dimensions } from "react-native";
import GlobalColors from "../../UI/GlobalColors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.mainColor,

    },
    innerContainer: {
        marginTop: windowHeight * 0.30,
        alignItems: 'center'
    },
    logoChef: {
        width: windowWidth * 0.52,
        height: windowHeight * 0.35,
    },
    mainHiding: {
        fontSize: 50,
        fontFamily: "Ranga_700Bold",
        lineHeight: 73.15,
        color: GlobalColors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.35,
        shadowRadius: 2.32,

        elevation: 10,
    }
});
