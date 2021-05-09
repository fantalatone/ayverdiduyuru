import React from "react";
import { View, Text, Image } from "react-native";
import { globalStyles } from "../styles/global";

export default function Header() {
    return (
        <View style={globalStyles.header}>
            <Image source={require("../assets/logo.png")} resizeMode={"contain"} style={globalStyles.headerLogo}/>
        </View>
    );
}