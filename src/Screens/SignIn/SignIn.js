import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./SignIn.style";
import GlobalStyles from "../../UI/GlobalStyles";
import InputText from "../../Components/InputText/InputText";
import Button from "../../Components/Button/Button";
import GlobalColors from "../../UI/GlobalColors";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.mainHiding}>Recipe King</Text>
      </View>
      <View style={styles.textView}>
        <Text style={GlobalStyles.hidingH1}>Sign In</Text>
      </View>
      <View>
        <Text style={GlobalStyles.hidingH2}>Login to your Account</Text>
      </View>
      <InputText placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <InputText
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign In" />
      <Text style={[GlobalStyles.hidingH3, styles.textsignwith]}>
        - Or Sign in with -{" "}
      </Text>
      <View style={[GlobalStyles.FlexRow, styles.LoginView]}>
        <TouchableOpacity style={styles.btnview}>
          <Image
            source={require("../../../assets/googleicon.png")}
            style={styles.google}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnview}>
          <Image
            source={require("../../../assets/fbicon.png")}
            style={styles.fb}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnview}>
          <Image
            source={require("../../../assets/twittericon.png")}
            style={styles.twitter}
          />
        </TouchableOpacity>
      </View>
      <View style={[GlobalStyles.FlexRow, styles.accountView]}>
        <Text style={GlobalStyles.hidingH3}>Don't have an Account? </Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>
    </View>
  );
}
