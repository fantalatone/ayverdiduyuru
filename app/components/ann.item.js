import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"
import { TouchableNativeFeedback } from "react-native-gesture-handler"
import variables from "../styles/variables";

export default function AnnouncementItem({ navigation, item }) {

    return (
        <View style={styles.item}>
            {item.banner !== undefined ? (
                <TouchableNativeFeedback onPress={() => navigation.navigate("Details", item)}> // TODO:DETAİLS CHANGE TO FEEDDETAİLS
                    <Image source={{uri: `data:${item.banner.contentType};base64,${item.banner.data}`}} style={styles.image} />
                    <View style={styles.ccontainer}>
                        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                        <Text style={styles.description} numberOfLines={2}>{item.content}</Text>
                    </View>
                </TouchableNativeFeedback>
            ) : (
                <TouchableNativeFeedback onPress={() => navigation.navigate("FeedDetails", item)}>
                    <View style={styles.ccontainer}>
                        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                        <Text style={styles.description} numberOfLines={2}>{item.content}</Text>
                    </View>
                </TouchableNativeFeedback>
            )}
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
