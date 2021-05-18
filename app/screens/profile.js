import React from "react";
import { View, Text, StyleSheet } from "react-native";
import variables from "../styles/variables"

export default function ProfileScreen() {
    
    return (
        <View>
            <Text style={styles.title}>Profil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "white",
        backgroundColor: variables.primaryColor,
        marginBottom: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 3,
        marginHorizontal: 80,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    }
});