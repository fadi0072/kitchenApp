import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './ChefProfile.style'
import GlobalStyles from '../../UI/GlobalStyles'
import { useNavigation } from '@react-navigation/native'
export default function ChefProfile() {
    const navigation = useNavigation();
    const RenderHeader = () => {
        return (
            <View style={styles.headerCon}>
                <View style={[styles.headerinner, GlobalStyles.FlexRow]}>
                    <Pressable hitSlop={20} onPress={() => { navigation.navigate('ChefList'), {} }}>
                        <Image source={require('../../../assets/arrow-left.png')} style={styles.backIcon} />
                    </Pressable>
                    <Text style={GlobalStyles.hidingH4}>
                        Chef Profile</Text>
                    <Image source={require('../../../assets/settingBlack.png')} style={styles.settingIcon} />
                </View>
                <View style={styles.dpView}>
                    <Image source={require('../../../assets/chefProfileImg.png')} style={styles.dpPic} />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <RenderHeader />
            <View style={styles.chefDesc}>
                <Text style={styles.chefName}>Khan Ali</Text>
            </View>
            <Text style={styles.postText}>head Chef of Holiday in</Text>
            <View style={[GlobalStyles.FlexRow, styles.innerDesc]}>
                <Image source={require('../../../assets/mapsmall.png')} style={styles.mapicon} />
                <Text style={styles.locationText}>Holiday in Istombol tuki</Text>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity style={[GlobalStyles.FlexRow, styles.followBtn]}>
                    <Image source={require('../../../assets/chefProfile/follow.png')} style={styles.followIcon} />
                    <Text style={styles.followText}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyles.FlexRow, styles.followBtn]}>
                    <Image source={require('../../../assets/chefProfile/chat.png')} style={styles.chatIcon} />
                    <Text style={styles.followText}>Chat</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.chefProp}>
                <TouchableOpacity style={GlobalStyles.FlexRow}>
                    <Image source={require('../../../assets/chefProfile/video.png')} style={styles.videoIcon} />
                    <Text style={styles.TextH2}>Videos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.FlexRow}>
                    <Image source={require('../../../assets/chefProfile/addpost.png')} style={styles.postIcon} />
                    <Text style={styles.TextH2}>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.FlexRow}>
                    <Image source={require('../../../assets/chefProfile/dishWhite.png')} style={styles.dishIcon} />
                    <Text style={styles.TextH2}>Recipes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottonView}>
                <TouchableOpacity>
                    <Image source={require('../../../assets/chefProfile/cancelwhite.png')} style={styles.cancelBtn} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../../assets/chefProfile/heartwhite.png')} style={styles.likeBtn} />
                </TouchableOpacity>
            </View>
        </View>
    )
}