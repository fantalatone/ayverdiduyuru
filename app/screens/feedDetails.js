import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { globalStyles } from "../styles/global";

export default function FeedDetailsScreen({ navigation }) {
    if (navigation.getParam("banner")) {
        return (
            <View>
                <ScrollView style={globalStyles.detailsContainer} showsVerticalScrollIndicator={false}>
                    <Image source={{uri: `data:${navigation.getParam("banner").contentType};base64,${navigation.getParam("banner").data}`}}  style={globalStyles.detailsImage}/>
                    <View style={{paddingHorizontal: 10, paddingVertical: 15}}>
                        <Text style={globalStyles.detailsTitle}> {navigation.getParam("title")} </Text>
                        <Text style={globalStyles.detailsDesc}> {navigation.getParam("content")} </Text>
                    </View>
                </ScrollView>
            </View>
        );
    } else {
        return (
            <View>
                <ScrollView style={globalStyles.detailsContainer} showsVerticalScrollIndicator={false}>
                    <Text style={globalStyles.detailsTitle}> {navigation.getParam("title")} </Text>
                    <Text style={globalStyles.detailsDesc}> {navigation.getParam("content")} </Text>
                </ScrollView>
            </View>
        );
    }
    
}