import { StyleSheet, Platform, StatusBar } from "react-native";
import { variables } from "./variables";

export const globalStyles = StyleSheet.create({
    container : {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header: {
        alignItems: "center",
        paddingVertical: 25
    },
    headerLogo: {
        height: 80,
    }
});
