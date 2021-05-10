import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { globalStyles } from "../styles/global";

export default function Header() {
    return (
        <View style={globalStyles.header}>
            <View style={globalStyles.headerNav}>
                <Text style={globalStyles.headerNavItem}>Tümü</Text>
                <Text style={globalStyles.headerNavItem}>Bana Özel</Text>
                <Text style={globalStyles.headerNavItem}>🔍</Text>
            </View>
        </View>
    );
}