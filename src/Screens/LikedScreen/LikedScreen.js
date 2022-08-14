import { View, Text } from "react-native";
import React from "react";
import GlobalColors from "../../UI/GlobalColors";
import InputText from "../../Components/InputText/InputText";
import styles from "./LikedScreen.style";
import GlobalStyles from "../../UI/GlobalStyles";
export default function LikedScreen() {
  const RenderHeader = () => {
    return (
      <View style={styles.headerMain}>
        <Text style={[GlobalStyles.hidingH4White, styles.fvrtTxt]}>
          Favorite Recipes
        </Text>
        <InputText
          placeholder="Search"
          Imgsource={require("../../../assets/search.png")}
          Imgstyle={styles.search}
        />
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <RenderHeader />
    </View>
  );
}
