import { StyleSheet, Dimensions } from "react-native";
import GlobalColors from "../../UI/GlobalColors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        padding: '7%'
    },
    imgStyle: {
        width: windowWidth * 0.89,
        height: windowHeight * 0.35,
        borderRadius: 20,
    },
    likedIcon: {
        left: 13,
        top: 12,
        width: 20,
        height: 20
    },
    innerCon: {
        marginTop: '5%',
        justifyContent: 'space-between',
        marginHorizontal: '10%'
    },
    innerText: {
        fontFamily: "Cookie_400Regular",
        fontSize: windowWidth * 0.10,
        color: GlobalColors.lightBrown,
    },
    info: {
        marginTop: windowHeight * 0.14,
        marginLeft: windowHeight * 0.03,
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
})