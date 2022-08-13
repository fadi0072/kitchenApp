import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./SignUpComplete.style";
import GlobalStyles from "../../UI/GlobalStyles";
import Button from "../../Components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import GlobalColors from "../../UI/GlobalColors";

const SignUpComplete = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/arrow-left.png')} style={styles.leftArrow} />
        </TouchableOpacity>
        <View style={styles.innerContainer}>
          <Image
            source={require("../../../assets/welcomeLogo.png")}
            style={styles.welcomeLogo}
          />
          <Text style={[GlobalStyles.hidingH1, styles.welcomeText]}>Welcome</Text>
          <Text style={[GlobalStyles.hidingH2]}>We're on a mission to help</Text>
          <Text style={GlobalStyles.hidingH2}>Food lovers and chefs at</Text>
          <Text style={GlobalStyles.hidingH2}>events achieve more...</Text>
          <Text style={[GlobalStyles.hidingH1, styles.info]}>
            Complete Your Account{" "}
          </Text>

        </View>
        <View
          style={[GlobalStyles.FlexRow, styles.rowBtn]}>
          <Button title="Food Lover" styleMain={styles.foodLover} />
          <Button title="Chef" styleMain={styles.Chef} style={styles.btnChef} styleTitle={styles.textcolor} />
        </View>


        <Button title="Get Started" style={styles.startedBtn} styleMain={styles.mainViewBtn} />
      </View>
    </ScrollView>
  );
};

export default SignUpComplete;
