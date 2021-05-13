import { StyleSheet, Platform, StatusBar } from "react-native";
import variables from "./variables";

export const globalStyles = StyleSheet.create({
    container : {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerItem: {
        paddingHorizontal: 45,
        paddingVertical: 18,
        textAlignVertical: "center",
        color: "black"
    },
    headerItemSelected: {
        paddingHorizontal: 45,
        paddingVertical: 18,
        textAlignVertical: "center",
        color: variables.primaryColor
    },
    feedItem: {
        backgroundColor: "white",
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
    feedItemImage: {
        width: "100%", 
        height: 110, 
        resizeMode: "cover", 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
    },
    feedItemContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    feedItemTitle: {
        fontSize: 20,
    },
    feedItemDesc: {
        marginTop: 3,
        fontSize: 15,
        color: variables.textColor
    },
    detailsContainer: {
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
    },
    detailsTitle: {
        fontSize: 24,
        textAlign: "center"
    },
    detailsDesc: {
        fontSize: 18,
        paddingBottom: 25
    },
    detailsImage: {
        width: "100%", 
        height: 350, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        resizeMode: "cover"
    }
});