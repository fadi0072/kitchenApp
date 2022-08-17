import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GlobalColors from "../../UI/GlobalColors";
import { OpenSans_500Medium, OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    headerMain: {
        padding: windowHeight * 0.03,
        backgroundColor: GlobalColors.mainColor,
        // height: 170,
        height: windowHeight * 0.23,
    },
    search: {
        width: 17.51,
        height: 17.51,
        alignSelf: "center",
        marginHorizontal: windowWidth * 0.006,
    },
    fvrtTxt: {
        top: 15,
    },
    innerHeader: {
        height: windowHeight * 0.08,
        backgroundColor: '#FEF6F2',
        elevation: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    textInner: {
        marginTop: '3%',
        marginLeft: '10%',
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 25,
        lineHeight: 29.3,
        color: '#331D08'
    },
    listText: {
        margin: '10%',
        fontSize: 18,
        lineHeight: 28
    }
});
