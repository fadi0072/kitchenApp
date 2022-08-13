import { StyleSheet, Dimensions } from "react-native";
import GlobalColors from "../../UI/GlobalColors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    buttonView: {
        backgroundColor: GlobalColors.mainColor,
        height: windowHeight * 0.065,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginVertical: windowHeight * 0.04
    },
    btnLabel: {
        fontSize: 15,
        fontFamily: 'WorkSans_700Bold',
        color: GlobalColors.white
    }

})