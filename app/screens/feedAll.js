import React from "react";
import { View, Text, Button } from "react-native";

export default function FeedAll({ navigation }) {

    const navigationHandle = () => {
        navigation.navigate("FeedCustom");
    }

    return (
        <View>
            <Text>Tümü</Text>
            <Button onPress={navigationHandle} title="Ananın Amına Git"/>
        </View>
    );
}