import { StyleSheet, Dimensions } from "react-native";
import GlobalColors from "../../UI/GlobalColors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.mainbackgroundColor,
        paddingHorizontal: windowWidth * 0.10
    },
    innerContainer: {
        marginTop: windowHeight * 0.15,
        alignItems: 'center'
    },
    mainHiding: {
        fontSize: 50,
        fontFamily: "Ranga_700Bold",
        lineHeight: 73.15,
        color: GlobalColors.mainColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.35,
        shadowRadius: 2.32,

        elevation: 10,
    },
    textView: {
        alignSelf: 'center',
    },
    signText: {
        fontSize: 16,
        fontFamily: 'WorkSans_400Regular',
        lineHeight: 19,
        color: ' #A7ABAE',
    }
});
