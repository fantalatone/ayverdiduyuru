import React from "react";
import { Text, View } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global"
import { FontAwesome, Ionicons, Feather } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"

export default function Header({ navigation, title }) {

    const handleNavigation = (target) => {
        navigation.navigate(target);
    }

    return (
        <View style={globalStyles.header}>
            <StatusBar style="light" backgroundColor="#000" />
            <TouchableNativeFeedback onPress={() => handleNavigation("Profile")}>
                <FontAwesome name="user-o" size={24} style={title == "Profile" ? globalStyles.headerItemSelected : globalStyles.headerItem}/>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => handleNavigation("Feed")}>
                <Feather name="home" size={24} style={title == "Feed" ? globalStyles.headerItemSelected : globalStyles.headerItem}/>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => handleNavigation("AskQuestion")}>
                <Ionicons name="chatbubble-outline" size={24} style={title == "AskQuestion" ? globalStyles.headerItemSelected : globalStyles.headerItem}/>
            </TouchableNativeFeedback>
        </View>
    );
}