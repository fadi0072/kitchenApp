import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./RecipeDetailCard.style";
import GlobalStyles from "../../UI/GlobalStyles";
export default function RecipeDetailCard() {
  return (
    <View style={styles.mainView}>
      <View style={GlobalStyles.FlexRow}>
        <Image
          source={require("../../../assets/dpRecipt.png")}
          style={styles.dpRecipt}
        />
        <View style={styles.info}>
          <Text style={styles.receiptTxt}>Recipe by </Text>
          <Text style={styles.receiptTxtName}>Matina Orgnza</Text>
          <Image
            source={require("../../../assets/stars.png")}
            style={styles.stars}
          />
        </View>
      </View>
      <View style={[GlobalStyles.FlexRow, styles.ingreView]}>
        <Text style={[GlobalStyles.hidingH4, styles.inteText]}>
          Ingredients:
        </Text>
        <View style={[GlobalStyles.FlexRow, styles.timeView]}>
          <Image
            source={require("../../../assets/time.png")}
            style={styles.time}
          />
          <Text style={styles.timeTxt}>15min</Text>
        </View>
        <View style={[GlobalStyles.FlexRow, styles.timeView]}>
          <Image
            source={require("../../../assets/serving.png")}
            style={styles.serving}
          />
          <Text style={styles.servingTxt}>1 Serving</Text>
        </View>
      </View>
      <View style={[GlobalStyles.FlexRow, styles.marginInte]}>
        <Text style={styles.txtInte}>1 cup</Text>
        <Text style={styles.txtInte2}> Banana, frozen</Text>
      </View>
      <View style={[GlobalStyles.FlexRow, styles.marginInte]}>
        <Text style={styles.txtInte}>1/2 cup</Text>
        <Text style={styles.txtInte2}>Strawberries frozen</Text>
      </View>
      <View style={[GlobalStyles.FlexRow, styles.marginInte]}>
        <Text style={styles.txtInte}>1/2 cup</Text>
        <Text style={styles.txtInte2}>Almond mlik, unsweetened</Text>
      </View>
      <View style={[GlobalStyles.FlexRow, styles.marginInte]}>
        <Text style={styles.txtInte}>1/2 cup</Text>
        <Text style={styles.txtInte2}>Yougurt plain dairy-free</Text>
      </View>
      <Text style={[GlobalStyles.hidingH4, styles.inteText]}>Direction:</Text>
      <Text style={styles.txtInte}>
        In a blender combine strawberries, milk, yogurt, sugar and vanilla.Toss
        in the ice. Blend until smooth and creamy.
      </Text>
    </View>
  );
}
