import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/Navigators/StackNavigation';
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="auto" />
      <MainStack />
    </NavigationContainer>
  );
}