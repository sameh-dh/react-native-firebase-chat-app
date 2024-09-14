import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import "../global.css"
// import {Slot} from "expo-router";
export default function StartPage() {
  return (
    <View className = "flex-1 items-center justify-center">
      <ActivityIndicator size="large" color="pink" animating={true} hidesWhenStopped={true} />
    
    </View>
  );
}



