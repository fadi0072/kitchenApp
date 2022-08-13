import { StyleSheet, Dimensions } from "react-native";
import GlobalColors from "../../UI/GlobalColors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({

    container: {
        backgroundColor: '#FFFFFF',
        marginTop: windowHeight * 0.035,
        marginBottom: windowHeight * 0.015,
        borderRadius: 10,
    },
    input: {
        borderColor: GlobalColors.mainColor,
        height: 48,
        borderWidth: 1.0,
        padding: 15,
        borderRadius: 10,
    },

})