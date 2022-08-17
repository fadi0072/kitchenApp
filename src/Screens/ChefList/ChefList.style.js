import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GlobalColors from "../../UI/GlobalColors";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    Heading: {
        fontSize: 30,
    },
    container: {
        marginTop: windowHeight * 0.06,
        padding: 12,
    },
    search: {
        width: 17.51,
        height: 17.51,
        alignSelf: "center",
        marginHorizontal: windowWidth * 0.006,
    },
    inputStyle: {
        bottom: 15
    }
})