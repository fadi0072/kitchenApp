import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GlobalColors from "../../UI/GlobalColors";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: GlobalColors.mainColor
    },
    headerinner: {
        justifyContent: 'space-between',
        marginTop: '8%',
        marginHorizontal: '5%'
    },
    headerCon: {
        height: windowHeight * 0.45,
        width: windowWidth,
        backgroundColor: GlobalColors.white
    },
    backIcon: {
        width: 32,
        height: 32
    },
    settingIcon: {
        width: 24,
        height: 25.18
    },
    videoIcon: {
        top: 3,
        width: 17,
        height: 14
    },
    postIcon: {
        width: 19,
        height: 19,
        right: 3
    },
    dishIcon: {
        top: 3,
        width: 20,
        height: 15,
    },
    dpView: {
        alignSelf: 'center',
        borderRadius: 50,

    },
    dpPic: {
        //width: 306,
        // height: 452,
        width: windowWidth * 0.68,
        height: windowHeight * 0.58,
    },
    mapicon: {
        width: 14,
        height: 18
    },
    chefDesc: {
        marginTop: windowHeight * 0.19,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    chefName: {
        fontSize: 25,
        lineHeight: 34.05,
        color: GlobalColors.white,
        fontFamily: "OpenSans_600SemiBold"
    },
    postText: {
        marginHorizontal: '25%',
        fontSize: 18,
        lineHeight: 24.51,
        color: GlobalColors.white,
        textAlignVertical: 'center',
        fontFamily: "OpenSans_600SemiBold"

    },
    locationText: {
        fontSize: 16,
        lineHeight: 21.79,
        fontFamily: "OpenSans_400Regular",
        color: GlobalColors.white,
        left: 5
    },
    innerDesc: {
        marginHorizontal: '25%'
    },
    followBtn: {
        backgroundColor: GlobalColors.white,
        width: windowWidth * 0.24,
        //height: 48,
        height: windowHeight * 0.065,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9
    },
    followIcon: {
        width: 18.74,
        height: 21.74
    },
    chatIcon: {
        width: 16,
        height: 14.93
    },
    followText: {
        fontSize: 16,
        left: 5,
        lineHeight: 21.79,
        fontFamily: "OpenSans_400Regular"
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '15%',
        marginVertical: '2%'
    },
    chefProp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '7%',
        marginVertical: '3%'
    },
    TextH2: {
        left: 6,
        fontSize: 16,
        color: GlobalColors.white,
        fontFamily: "OpenSans_600SemiBold"

    },
    bottonView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: '25%',
        marginBottom: 23
    },
    cancelBtn: {
        width: 48,
        height: 48
    },
    likeBtn: {
        width: 48,
        height: 42.7
    }

})