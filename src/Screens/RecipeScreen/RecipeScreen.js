import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from './RecipeScreen.style'
import GlobalStyles from "../../UI/GlobalStyles";
import InputText from "../../Components/InputText/InputText";
export default function RecipeScreen() {
  const [list, setList] = useState([
    "American",
    "Asian",
    'Arabian',
    'European',
    'African',
    'Continental',
    'Deasi',
    'Fast Food',
    'Seafood',
    'Sandwiches',
    'Pizza',
    'Steak',
    'Desserts',
    'Cakes and Bakery',
    'Tea and Coffee',
    'Beverages'

  ])
  const RenderHeader = () => {
    return (
      <View style={styles.headerMain}>
        <Text style={[GlobalStyles.hidingH4White, styles.fvrtTxt]}>
          Discover Recipe!
        </Text>
        <InputText
          placeholder="Search"
          Imgsource={require("../../../assets/search.png")}
          Imgstyle={styles.search}
        />
      </View>

    );
  };
  const RendersubHeader = () => {
    return (
      <View style={styles.innerHeader}>
        <Text style={styles.textInner}>Cuisines List</Text>
      </View>
    )
  }
  return (
    <View style={GlobalStyles.Flex1}>
      <RenderHeader />
      <RendersubHeader />
      <ScrollView>
        <Text style={styles.listText}>{list.map(item => item + '\n')}</Text>
      </ScrollView>
    </View>
  );
}
