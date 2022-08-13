import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./SignUpComplete.style";
import GlobalStyles from "../../UI/GlobalStyles";

const SignUpComplete = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default SignUpComplete;
