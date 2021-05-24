import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { FontAwesome, MaterialIcons, Feather } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"
import variables from "../styles/variables"

export default function Header({ navigation, title }) {

    const handleNavigation = (target) => {
        navigation.navigate(target);
    }

    const itemStyle = (x) => {
        if (title == x) {
            return {
                paddingHorizontal: 45,
                paddingVertical: 16,
                textAlignVertical: "center",
                color: variables.primaryColor,
            }
        }
        return {
            paddingHorizontal: 45,
            paddingVertical: 16,
            textAlignVertical: "center",
            color: "black"
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="#000" />
            <TouchableNativeFeedback onPress={() => handleNavigation("Profile")}>
                <FontAwesome name="user-o" size={24} style={itemStyle("Profile")}/>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => handleNavigation("Feed")}>
                <Feather name="home" size={24} style={itemStyle("Feed")}/>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => handleNavigation("AskQuestion")}>
                <MaterialIcons name="chat-bubble-outline" size={24} style={itemStyle("AskQuestion")}/>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});