import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../../UI/GlobalStyles'
import styles from './ChefCard.style'
import { useNavigation } from '@react-navigation/native'
export default function ChefCard() {
    const navigation = useNavigation();
    const [chefData, setChefData] = useState([
        {
            chefName: "Pedro Silva"
        },
        {
            chefName: "Khan Ali"
        },



    ])
    const RenderChefCard = (item, i) => {
        return (
            <View style={[GlobalStyles.FlexRow]} key={i}>
                <TouchableOpacity style={styles.innerContainer} onPress={() => { navigation.navigate('ChefProfile') }}>
                    <View style={styles.innerHeader}>
                        <Text style={styles.chefName}>{item.chefName}</Text>
                    </View>
                    <View style={styles.centeredView}>
                        <Text style={styles.chefDesc}>Best Itlaian chef</Text>
                        <Image
                            source={require("../../../assets/stars.png")}
                            style={styles.stars}
                        />
                    </View>
                    <View style={styles.innerContent}>
                        <Image
                            source={require("../../../assets/comment.png")}
                            style={styles.commentIcon}
                        />
                        <Text style={styles.countRes}>(50+) Recipes</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <Image
                            source={require("../../../assets/chefImg.png")}
                            style={styles.chefImg}
                        />
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
    return (
        <View style={[GlobalStyles.FlexRow, styles.mainContainer]}>
            {chefData.map(RenderChefCard)}
        </View>

    )
}