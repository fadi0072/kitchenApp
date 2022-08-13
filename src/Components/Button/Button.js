import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Button.style";

export default function Button({ title, onPress, style, styleMain, styleTitle }) {
    return (
        <View style={styleMain}>
            <TouchableOpacity style={[styles.buttonView, style]} onPress={onPress}>
                <Text style={[styles.btnLabel, styleTitle]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
