import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Feed from "../components/feed"
import variables from "../styles/variables"

export default function FeedScreen({ navigation }) {
    return (
        <View>
            <Text style={styles.title}>Duyuru Akışı</Text>
            <Feed navigation={ navigation }/>
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