import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "../global.css"
// import {Slot} from "expo-router";
export default function App() {
  return (
    <View className = "flex-1 items-center justify-center">
      <Text className="text-pink-400"> let's start now </Text>
      <StatusBar style="auto" />
    </View>
  );
}



