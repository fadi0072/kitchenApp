import { View, Text } from 'react-native'
import React from 'react'
import styles from './SignIn.style'

export default function SignIn() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.mainHiding}>Recipe King</Text>
            </View>
        </View>
    )
}