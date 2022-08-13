import { View, TextInput } from "react-native";
import React from "react";
import styles from "./InputText.style";
import GlobalStyles from "../../UI/GlobalStyles";

const InputText = ({
  onChangeText,
  value,
  style,
  placeholder,
  secureTextEntry,
  defaultValue,
  maxLength,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        defaultValue={defaultValue}
        maxLength={maxLength}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputText;
