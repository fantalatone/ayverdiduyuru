import { StyleSheet, Platform, StatusBar } from "react-native";
import { variables } from "./variables";

export const globalStyles = StyleSheet.create({
    container : {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header: {
    },
    headerNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 35
    },
    headerNavItem: {
        fontSize: 20
    },
    feedTitle: {
        textAlign: "center",
        fontSize: 28,
    }
});
