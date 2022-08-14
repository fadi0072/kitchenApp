import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import styles from "./CustomTabBar.style";
import { useNavigation } from "@react-navigation/native";

export const CustomTabBar = () => {
  const [IsSelected, setIsSelected] = useState(1);

  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.childContainer}>
        <Pressable
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          hitSlop={20}
          onPress={() => {
            setIsSelected(1);
            navigation.navigate("HomeScreen");
          }}
        >
          <Image
            source={
              IsSelected == 1
                ? require("../../../assets/CustomTabBar/homeActive.png")
                : require("../../../assets/CustomTabBar/home.png")
            }
            resizeMode="contain"
            style={styles.TabBarIcon}
          />
        </Pressable>
      </View>
      <View style={styles.childContainer}>
        <Pressable
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          hitSlop={20}
          onPress={() => {
            setIsSelected(2);
            navigation.navigate("ChefList");
          }}
        >
          <Image
            source={
              IsSelected == 2
                ? require("../../../assets/CustomTabBar/chefActive.png")
                : require("../../../assets/CustomTabBar/chef.png")
            }
            resizeMode="contain"
            style={styles.TabBarIcon}
          />
        </Pressable>
      </View>
      <View style={styles.childContainer}>
        <Pressable
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          hitSlop={20}
          onPress={() => {
            setIsSelected(3);
            navigation.navigate("RecipeScreen");
          }}
        >
          <Image
            source={
              IsSelected == 3
                ? require("../../../assets/CustomTabBar/recipeActive.png")
                : require("../../../assets/CustomTabBar/recipe.png")
            }
            resizeMode="contain"
            style={[styles.recipeStyle]}
          />
        </Pressable>
      </View>
      <View style={styles.childContainer}>
        <Pressable
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          hitSlop={20}
          onPress={() => {
            setIsSelected(4);
            navigation.navigate("LikedScreen");
          }}
        >
          <Image
            source={
              IsSelected == 4
                ? require("../../../assets/CustomTabBar/likedActive.png")
                : require("../../../assets/CustomTabBar/liked.png")
            }
            resizeMode="contain"
            style={styles.TabBarIcon}
          />
        </Pressable>
      </View>

      <View style={styles.childContainer}>
        <Pressable
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          hitSlop={20}
          onPress={() => {
            setIsSelected(5);
            navigation.navigate("ProfileScreen");
          }}
        >
          <Image
            source={
              IsSelected == 5
                ? require("../../../assets/CustomTabBar/profile.png")
                : require("../../../assets/CustomTabBar/profile.png")
            }
            resizeMode="contain"
            style={styles.TabBarIcon}
          />
        </Pressable>
      </View>
    </View>
  );
};
