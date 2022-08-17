import { StyleSheet, Dimensions } from "react-native";
import GlobalColors from "../../UI/GlobalColors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    mainContainer: {
        justifyContent: 'space-between',
        marginHorizontal: '5%'
    },
    innerContainer: {
        width: windowWidth * 0.40,
        height: windowHeight * 0.25,
        backgroundColor: GlobalColors.white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        elevation: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    innerHeader: {
        backgroundColor: GlobalColors.mainColor,
        height: windowHeight * 0.07,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chefName: {
        fontSize: 16,
        lineHeight: 21.79,
        color: GlobalColors.white,
        fontFamily: "OpenSans_400Regular"
    },
    stars: {
        top: windowHeight * 0.004,
        width: 66.91,
        height: 11.54,
    },
    commentIcon: {
        width: 14,
        height: 13,
        top: 4
    },
    centeredView: {
        marginTop: windowHeight * 0.02,
        alignItems: 'center'
    },
    chefDesc: {
        fontSize: 12,
        fontFamily: "OpenSans_400Regular",
        lineHeight: 16.34,
        color: GlobalColors.lightBrown
    },
    innerContent: {
        marginTop: windowHeight * 0.015,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '10%'
    },
    countRes: {
        fontSize: 12,
        fontFamily: "OpenSans_400Regular",
        color: GlobalColors.lightBlue
    },
    chefImg: {
        width: 89,
        height: 94
    },
    imgContainer: {
        marginTop: windowHeight * 0.010,
        alignSelf: 'center'
    }
})