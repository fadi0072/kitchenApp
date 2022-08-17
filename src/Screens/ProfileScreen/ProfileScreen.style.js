import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GlobalColors from "../../UI/GlobalColors";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
export default StyleSheet.create({
    headerinner: {
        justifyContent: 'space-between',
        marginTop: '8%',
        marginHorizontal: '5%'
    },
    headerCon: {
        height: windowHeight * 0.20,
        width: windowWidth,
        backgroundColor: GlobalColors.mainColor
    },
    backIcon: {
        width: 32,
        height: 32
    },
    settingIcon: {
        width: 24,
        height: 25.18
    },
    dpView: {
        alignSelf: 'center',
        marginTop: '2%'
    },
    dpPic: {
        width: windowWidth * 0.42,
        height: windowHeight * 0.24
    },
    innerContant: {
        marginTop: windowHeight * 0.22,
        flexDirection: 'column'
    },
    userImg: {
        marginLeft: '8%',
        marginRight: '15%',
        marginBottom: '10%',
        width: 22.67,
        height: 22.67
    },
    proImg: {
        marginLeft: '8%',
        marginRight: '15%',
        marginBottom: '10%',
        width: 22,
        height: 24.44
    },
    emailImg: {
        marginLeft: '8%',
        marginRight: '15%',
        marginBottom: '10%',
        width: 22,
        height: 16.51
    },
    mapImg: {
        marginLeft: '8%',
        marginRight: '15%',
        marginBottom: '10%',
        width: 20,
        height: 25.72
    },
    logoutImg: {
        marginLeft: '8%',
        marginRight: '15%',
        marginBottom: '10%',
        width: 22,
        height: 19.8
    },
    nameTxt: {
        fontSize: 22,
        lineHeight: 25,
        color: GlobalColors.lightBrown
    },
    proText: {
        fontSize: 22,
        color: GlobalColors.grey,
    },
    emailTxt: {
        fontSize: 18,
        color: GlobalColors.grey,
    },
    mapTxt: {
        fontSize: 19.07,
        color: GlobalColors.grey,
    },
    logoutTxt: {
        fontSize: 19.7,
        lineHeight: 22.34,
        color: 'black'
    }
})