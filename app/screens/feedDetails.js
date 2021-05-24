import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function FeedDetailsScreen({ navigation }) {
    if (navigation.getParam("banner")) {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Image source={{uri: `data:${navigation.getParam("banner").contentType};base64,${navigation.getParam("banner").data}`}}  style={styles.image}/>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.title}> {navigation.getParam("title")} </Text>
                    <Text style={styles.description}> {navigation.getParam("content")} </Text>
                </View>
            </ScrollView>
        );
    } else {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}> {navigation.getParam("title")} </Text>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}> {navigation.getParam("content")} </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginVertical: 10
    },
    descriptionContainer: {
        padding: 10
    },
    description: {
        fontSize: 18,
        lineHeight: 22
    },
    image: {
        width: "100%", 
        height: 350, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        resizeMode: "cover"
    },
    backButton: {
        color: "white",
        position: "absolute",
        zIndex: 2,
        padding: 10,
        margin: 10,
        backgroundColor: "black",
        borderBottomRightRadius: 30
    }
});