import React from "react";
import { View, Text } from "react-native";
import Feed from "../components/feed"

export default function FeedScreen({ navigation }) {
    return (
        <View>
            <Text style={{fontSize: 24, textAlign: "center"}}>Duyuru Akışı</Text>
            <Feed navigation={ navigation }/>
        </View>
    );
}