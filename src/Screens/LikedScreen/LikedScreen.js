import { View, Text, ScrollView } from "react-native";
import React from "react";
import GlobalColors from "../../UI/GlobalColors";
import InputText from "../../Components/InputText/InputText";
import styles from "./LikedScreen.style";
import GlobalStyles from "../../UI/GlobalStyles";
import RecipeCardLiked from "../../Components/RecipeCardLiked/RecipeCardLiked";
export default function LikedScreen() {
  const RenderHeader = () => {
    return (
      <View style={styles.headerMain}>
        <Text style={[GlobalStyles.hidingH4White, styles.fvrtTxt]}>
          Favourite Recipes
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
    <View style={GlobalStyles.Flex1}>
      <RenderHeader />
      <ScrollView>
        <RecipeCardLiked />
      </ScrollView>
    </View>
  );
}
