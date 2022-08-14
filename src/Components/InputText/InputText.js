import { View, TextInput, Image } from "react-native";
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
  Imgsource,
  Imgstyle,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Image style={Imgstyle} source={Imgsource} />
        <TextInput
          style={[styles.inputWidth, style]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          defaultValue={defaultValue}
          maxLength={maxLength}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default InputText;
