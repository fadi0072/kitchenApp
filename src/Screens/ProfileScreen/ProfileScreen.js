import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from './ProfileScreen.style'
import GlobalStyles from "../../UI/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const RenderHeader = () => {
    return (
      <View style={styles.headerCon}>
        <View style={[styles.headerinner, GlobalStyles.FlexRow]}>
          <Pressable hitSlop={20} onPress={() => { navigation.navigate('HomeScreen'), {} }}>
            <Image source={require('../../../assets/profile/arrow-leftwhite.png')} style={styles.backIcon} />
          </Pressable>
          <Text style={GlobalStyles.hidingH4White}>
            My Profile</Text>
          <Image source={require('../../../assets/profile/settingicon.png')} style={styles.settingIcon} />
        </View>
        <View style={styles.dpView}>
          <Image source={require('../../../assets/profile/dp.png')} style={styles.dpPic} />
        </View>
      </View>
    )
  }
  return (
    <View>
      <RenderHeader />
      <View style={styles.innerContant}>
        <View style={GlobalStyles.FlexRow}>
          <Image source={require('../../../assets/profile/user.png')} style={styles.userImg} />
          <Text style={styles.nameTxt}>Nick FROST</Text>
        </View>
        <View style={GlobalStyles.FlexRow}>
          <Image source={require('../../../assets/profile/product.png')} style={styles.proImg} />
          <Text style={styles.proText}>Product Designer </Text>
        </View>
        <View style={GlobalStyles.FlexRow}>
          <Image source={require('../../../assets/profile/email.png')} style={styles.emailImg} />
          <Text style={styles.emailTxt}>aatech.pakistan@gmail.com</Text>
        </View>
        <View style={GlobalStyles.FlexRow}>
          <Image source={require('../../../assets/profile/location.png')} style={styles.mapImg} />
          <Text style={styles.mapTxt}>San Francisco</Text>
        </View>
        <View style={GlobalStyles.FlexRow}>
          <Image source={require('../../../assets/profile/logout.png')} style={styles.logoutImg} />
          <Pressable onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.logoutTxt}>Logout </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
