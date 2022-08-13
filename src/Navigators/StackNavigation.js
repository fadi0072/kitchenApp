import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
import { Ranga_400Regular, Ranga_700Bold } from '@expo-google-fonts/ranga';
import {
    WorkSans_100Thin,
    WorkSans_200ExtraLight,
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_800ExtraBold,
    WorkSans_900Black,
    WorkSans_100Thin_Italic,
    WorkSans_200ExtraLight_Italic,
    WorkSans_300Light_Italic,
    WorkSans_400Regular_Italic,
    WorkSans_500Medium_Italic,
    WorkSans_600SemiBold_Italic,
    WorkSans_700Bold_Italic,
    WorkSans_800ExtraBold_Italic,
    WorkSans_900Black_Italic,
} from '@expo-google-fonts/work-sans';
import {
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    OpenSans_300Light_Italic,
    OpenSans_400Regular_Italic,
    OpenSans_500Medium_Italic,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash/Splash'
import SignIn from '../Screens/SignIn/SignIn';
const Stack = createNativeStackNavigator();

const MainStack = () => {
    let [fontsLoaded, error] = useFonts({
        Ranga_400Regular,
        Ranga_700Bold,
        WorkSans_100Thin,
        WorkSans_200ExtraLight,
        WorkSans_300Light,
        WorkSans_400Regular,
        WorkSans_500Medium,
        WorkSans_600SemiBold,
        WorkSans_700Bold,
        WorkSans_800ExtraBold,
        WorkSans_900Black,
        WorkSans_100Thin_Italic,
        WorkSans_200ExtraLight_Italic,
        WorkSans_300Light_Italic,
        WorkSans_400Regular_Italic,
        WorkSans_500Medium_Italic,
        WorkSans_600SemiBold_Italic,
        WorkSans_700Bold_Italic,
        WorkSans_800ExtraBold_Italic,
        WorkSans_900Black_Italic,
        OpenSans_300Light,
        OpenSans_400Regular,
        OpenSans_500Medium,
        OpenSans_600SemiBold,
        OpenSans_700Bold,
        OpenSans_800ExtraBold,
        OpenSans_300Light_Italic,
        OpenSans_400Regular_Italic,
        OpenSans_500Medium_Italic,
        OpenSans_600SemiBold_Italic,
        OpenSans_700Bold_Italic,
        OpenSans_800ExtraBold_Italic,
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <Stack.Navigator initialRouteName="Splash" backBehavior="initialRoute">
            <Stack.Screen
                options={{
                    headerShown: false,
                    headerTransparent: true,
                }}
                name="Splash"
                component={Splash}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                    headerTransparent: true,
                }}
                name="SignIn"
                component={SignIn}
            />
        </Stack.Navigator>
    );
}

export default MainStack