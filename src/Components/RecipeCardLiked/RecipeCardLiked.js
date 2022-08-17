import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './RecipeCardLiked.style'
import GlobalStyles from '../../UI/GlobalStyles'
export default function RecipeCardLiked() {
    const [data, setData] = useState([
        {
            RecpName: "Pomegranate Pie "
        },
        {
            RecpName: "Italian Soup"
        },
        {
            RecpName: "Pomegranate Pie "
        }
    ])
    const renderLikedCard = (item, i) => {
        return (
            <View style={styles.mainContainer} key={i}>
                <ImageBackground source={require('../../../assets/LikedCard.png')} style={styles.imgStyle}>
                    <View style={[GlobalStyles.FlexRow, styles.innerCon]}>
                        <Text style={styles.innerText}>{item.RecpName} </Text>
                        <Image source={require('../../../assets/CustomTabBar/likedActive.png')} style={styles.likedIcon} />
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.receiptTxt}>Recipe by </Text>
                        <Text style={styles.receiptTxtName}>Matina Orgnza</Text>
                        <Image
                            source={require("../../../assets/stars.png")}
                            style={styles.stars}
                        />
                    </View>
                </ImageBackground>
            </View>
        )
    }
    return (
        <View>
            {data.map(renderLikedCard)}
        </View>
    )
}