import React, { useState, useEffect } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";

export default function Feed({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://192.168.1.221:7475/duyuru/cek')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <FlatList
            data={data}
            keyExtractor={({ _id }, index) => _id}
            renderItem={({ item }) =>  {
                if (item.banner !== undefined) {
                    console.log(item.banner.contentType)
                    return (
                        <View style={globalStyles.feedItem}>
                            <TouchableNativeFeedback onPress={() => navigation.navigate("Details", item)}>
                                <Image source={{uri: `data:${item.banner.contentType};base64,${item.banner.data}`}} style={globalStyles.feedItemImage} />
                                <View style={globalStyles.feedItemContainer}>
                                    <Text style={globalStyles.feedItemTitle}>{item.title}</Text>
                                    <Text style={globalStyles.feedItemDesc} numberOfLines={2}>{item.content}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    )
                } else {
                    return (
                        <View style={globalStyles.feedItem}>
                            <TouchableNativeFeedback onPress={() => navigation.navigate("Details", item)}>
                                <View style={globalStyles.feedItemContainer}>
                                    <Text style={globalStyles.feedItemTitle}>{item.title}</Text>
                                    <Text style={globalStyles.feedItemDesc} numberOfLines={2}>{item.content}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    )
                }
            }}
        />
    );
}