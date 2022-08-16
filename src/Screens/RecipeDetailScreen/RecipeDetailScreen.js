import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import styles from "./RecipeDetailScreen.style";
import { useNavigation } from "@react-navigation/native";
import RecipeDetailCard from "../../Components/RecipeDetailCard/RecipeDetailCard";
export default function RecipeDetailScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../../../assets/recipe/backgroundRecipe.png")}
      style={{ flex: 1 }}
    >
      <Pressable onPress={() => navigation.goBack()}
        hitSlop={20}>
        <Image
          source={require("../../../assets/arrowLeftWhite.png")}
          style={styles.leftArrow}
        />
      </Pressable>
      <Text style={styles.recipeName}>Forsty Strwaberry Smootie</Text>
      <View style={styles.recipeCard}>
        <RecipeDetailCard />
      </View>
    </ImageBackground>
  );
}
