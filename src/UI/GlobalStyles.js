import { Dimensions } from "react-native";
import GlobalColors from "./GlobalColors";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
export default {
    hidingH1: {
        fontSize: windowHeight * 0.04,
        fontFamily: "OpenSans_700Bold",
        lineHeight: 48,
        color: GlobalColors.lightBrown
    },
    hidingH2: {
        fontSize: windowHeight * 0.03,
        fontFamily: "OpenSans_400Regular",
        lineHeight: 27,
        color: GlobalColors.lightBrown
    },
    hidingH3: {
        fontSize: 16,
        fontFamily: 'WorkSans_400Regular',
        lineHeight: 19,
        color: ' #A7ABAE',
        opacity: 0.5
    },
    FlexRow: {
        flexDirection: "row"
    }
}