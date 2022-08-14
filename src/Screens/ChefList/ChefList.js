import { View, Text } from "react-native";
import React from "react";
import styles from "../ChefList/ChefList.style";

export default function ChefList() {
  return (
    <View>
      <View>
        <View style={styles.topName}>
          <Text>pedro silve</Text>
        </View>
        <View>
          <Text>Best Italin Chef</Text>
          {/* <Image
              source={require("../../../assets/fbicon.png")}
              style={styles.fb}
            /> */}
        </View>
      </View>
    </View>
  );
}
