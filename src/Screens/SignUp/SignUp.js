import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./SignUp.style";
import GlobalStyles from "../../UI/GlobalStyles";
import InputText from "../../Components/InputText/InputText";
import Button from "../../Components/Button/Button";
import GlobalColors from "../../UI/GlobalColors";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPassword] = useState("");
    return (
        <ScrollView style={styles.container}>
            <View >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/arrow-left.png')} style={styles.leftArrow} />
                </TouchableOpacity>
                <View style={styles.innerMain}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.mainHiding}>Recipe King</Text>
                    </View>
                    <View style={styles.textView}>
                        <Text style={GlobalStyles.hidingH1}>Sign Up</Text>
                    </View>
                    <View>
                        <Text style={GlobalStyles.hidingH2}>Create your Account</Text>
                    </View>
                    <InputText placeholder="Email" onChangeText={(text) => setEmail(text)} />
                    <InputText
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                    />
                    <InputText
                        placeholder="Confirm Password"
                        onChangeText={(text) => setConfirmPassword(text)}
                    />
                    <Button title="Sign Up" onPress={() => navigation.navigate('SignUpComplete')} />
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
                </View>
            </View>
        </ScrollView>
    );
}
