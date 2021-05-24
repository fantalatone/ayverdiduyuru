import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { TouchableNativeFeedback } from "react-native-gesture-handler"
import variables from "../styles/variables";

export default function QAItem({ navigation, item }) {

    return (
        <View style={styles.item}>
            <TouchableNativeFeedback onPress={() => navigation.navigate("QuestionDetails", item)}>
                <View style={styles.ccontainer}>
                    <Text numberOfLines={1} style={styles.title}>Soru : {item.question}</Text>
                    <Text style={styles.description} numberOfLines={2}>{item.senderSchoolNo} - {item.senderName} tarafından soruldu.</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "white",
        overflow: "hidden",
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    image: {
        overflow: "hidden",
        width: "100%", 
        height: 110, 
        resizeMode: "cover", 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
    },
    ccontainer: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    title: {
        fontSize: 20,
    },
    description: {
        marginTop: 3,
        fontSize: 15,
        color: variables.textColor
    },
})