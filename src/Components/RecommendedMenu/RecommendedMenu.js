import { View, Text } from "react-native";
import React from "react";
import styles from "./RecommendedMenu.style";

const RecommendedMenu = () => {
  return (
    <View>
      <Image
        style={styles.search}
        source={require("../../../assets/Menu.png")}
      />
      <Text>Forsty Strwaberry Smootie</Text>
    </View>
  );
};

export default RecommendedMenu;
