import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles } from "./styles/global";
import Header from "./components/header";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar backgroundColor={"#FFF"} />
      <Header/>
      <Text>Samiha Ayverdi Anadolu Lisesi</Text>
    </SafeAreaView>
  );
}