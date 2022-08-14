import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./HomeScreen.style";
import GlobalStyles from "../../UI/GlobalStyles";
import InputText from "../../Components/InputText/InputText";
import GlobalColors from "../../UI/GlobalColors";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={[GlobalStyles.hidingH1]}>Discover</Text>
        <Text style={[GlobalStyles.hidingH3, styles.subHeading]}>
          Your daily inspirations of recipe{" "}
        </Text>
        <View>
          <View>
            <InputText
              placeholder="Search"
              Imgsource={require("../../../assets/search.png")}
              Imgstyle={styles.search}
            />
          </View>
        </View>
        <Text style={[GlobalStyles.hidingH2, styles.txt]}>Recommended</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigation.navigate("RecipeDetailScreen")}
          >
            <ImageBackground
              style={styles.menuDiv}
              source={require("../../../assets/menu.png")}
            >
              <Text style={styles.recipeName}>Forsty Strwaberry Smootie</Text>
              <View style={[GlobalStyles.FlexRow, styles.mainView]}>
                <View style={styles.viewTxtImg}>
                  <Text style={styles.RecBy}>Recipe by </Text>
                  <Text style={styles.name}>Matina Orgnza</Text>
                </View>
                <Image
                  source={require("../../../assets/dpRecipt.png")}
                  style={styles.dpRecipt}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              style={styles.menuDiv}
              source={require("../../../assets/menu.png")}
            >
              <Text style={styles.recipeName}>Forsty Strwaberry Smootie</Text>
              <View style={[GlobalStyles.FlexRow, styles.mainView]}>
                <View style={styles.viewTxtImg}>
                  <Text style={styles.RecBy}>Recipe by </Text>
                  <Text style={styles.name}>Matina Orgnza</Text>
                </View>
                <Image
                  source={require("../../../assets/dpRecipt.png")}
                  style={styles.dpRecipt}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity style={[GlobalStyles.FlexRow, styles.ViewAll]}>
          <Text style={styles.Viewtxt}>View All</Text>
          <Image
            source={require("../../../assets/arrow-right.png")}
            style={styles.iconImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
