import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../../../assets/arrowLeftWhite.png")}
          style={styles.leftArrow}
        />
      </TouchableOpacity>
      <Text style={styles.recipeName}>Forsty Strwaberry Smootie</Text>
      <View style={styles.recipeCard}>
        <RecipeDetailCard />
      </View>
    </ImageBackground>
  );
}
