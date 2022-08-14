import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./HomeScreen.style";
import GlobalStyles from "../../UI/GlobalStyles";
import InputText from "../../Components/InputText/InputText";

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={[GlobalStyles.hidingH1, styles.Heading]}>Discover</Text>
        <Text style={[GlobalStyles.hidingH2, styles.subHeading]}>
          Your daily inspirations of recipe{" "}
        </Text>
        <View>
          <Image
            style={styles.search}
            source={require("../../../assets/search.png")}
          />
          <View>
            <InputText placeholder="Search" />
          </View>
        </View>
        <Text style={[GlobalStyles.hidingH2, styles.txt]}>Recommanded</Text>
        <View>
          <Image
            style={styles.menuDiv}
            source={require("../../../assets/menu.png")}
          />
          <Text>Forsty Strwaberry Smootie</Text>
        </View>
      </View>
    </View>
  );
}
