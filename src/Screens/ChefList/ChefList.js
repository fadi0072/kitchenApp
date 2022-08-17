import { View, Text } from "react-native";
import React from "react";
import styles from "../ChefList/ChefList.style";
import GlobalStyles from "../../UI/GlobalStyles";
import InputText from "../../Components/InputText/InputText";
import ChefCard from "../../Components/ChefCard/ChefCard";

export default function ChefList() {
  return (
    <View style={styles.container}>
      <Text style={[GlobalStyles.hidingH1]}>Discover</Text>
      <View>
        <InputText
          inputStyle={styles.inputStyle}
          placeholder="Search"
          Imgsource={require("../../../assets/search.png")}
          Imgstyle={styles.search}
        />
        <ChefCard />
      </View>

    </View>
  );
}
