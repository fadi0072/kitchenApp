import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './SignIn.style'
import GlobalStyles from '../../UI/GlobalStyles'
import InputText from '../../Components/InputText/InputText'

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
            <InputText placeholder="Password" onChangeText={(text) => setPassword(text)} />
            <View>
                <Text style={styles.signText}>- Or Sign in with - </Text>
            </View>
        </View>
    )
}