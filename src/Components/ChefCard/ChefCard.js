import { View, Text, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../../UI/GlobalStyles'
import styles from './ChefCard.style'
import { useNavigation } from '@react-navigation/native'
export default function ChefCard() {
    const navigation = useNavigation();
    const [chefData, setChefData] = useState([
        {
            chefName: "Pedro Silva",
            chefQuality: "Best Itlaian chef"
        },
        {
            chefName: "Khan Ali",
            chefQuality: "Best German chef"
        },
        {
            chefName: "Ahmed Ali",
            chefQuality: "Best Europen chef"
        },
        {
            chefName: "Asad Ali",
            chefQuality: "Best Europen chef"
        },
    ])
    const RenderChefCard = ({ chefName, chefQuality }) => {
        return (
            <View style={[GlobalStyles.FlexRow]}>
                <TouchableOpacity style={styles.innerContainer} onPress={() => { navigation.navigate('ChefProfile', { chefName: chefName, chefQuality: chefQuality }) }}>
                    <View style={styles.innerHeader}>
                        <Text style={styles.chefName}>{chefName}</Text>
                    </View>
                    <View style={styles.centeredView}>
                        <Text style={styles.chefDesc}>{chefQuality}</Text>
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
        <FlatList
            columnWrapperStyle={styles.spacebtwn}
            data={chefData}
            keyExtractor={item => item.itemId}
            horizontal={false}
            numColumns={2}
            renderItem={({ item, index }) => (
                <View style={styles.flatView}>
                    <RenderChefCard chefName={item.chefName} chefQuality={item.chefQuality} />
                </View>
            )}
        />
    )
}