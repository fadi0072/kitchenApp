import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Button.style";

export default function Button({ title, onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.buttonView} onPress={onPress}>
        <Text style={styles.btnLabel}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
