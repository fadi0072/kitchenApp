import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
import { Ranga_400Regular, Ranga_700Bold } from '@expo-google-fonts/ranga';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash/Splash'
import SignIn from '../Screens/SignIn/SignIn';
const Stack = createNativeStackNavigator();

const MainStack = () => {
    let [fontsLoaded, error] = useFonts({
        Ranga_400Regular,
        Ranga_700Bold
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