import React, { useState, useEffect } from "react";
import { FlatList, Image, Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons"
import variables from "../styles/variables";
import AnnouncementItem from "../components/ann.item";
import QAItem from "../components/qa.item";

export default function FeedScreen({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        refreshData().then(data => setData(data))
    }, []);

    const refreshData = () => {
        return fetch('http://192.168.1.221:7475/cek')
            .then((response) => response.json())
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    return (
        <View style={{marginTop: 5}}>
            <FlatList
                style={{}}
                data={data}
                keyExtractor={({ _id }) => _id}
                renderItem={({ item }) =>  {
                    return (
                        <View>
                            {item.type == "_duyuru" ? (
                                <AnnouncementItem navigation={navigation} item={item} />
                            ) : (
                                <QAItem navigation={navigation} item={item} />
                            )}
                        </View>
                    )
                }}
            />
            <View style={styles.refreshContainer}>
                <TouchableNativeFeedback style={styles.refresh} onPress={() => refreshData().then(data => setData(data))}>
                    <MaterialIcons name="refresh" size={40} style={{color: "white"}}/>
                </TouchableNativeFeedback>
            </View>
        </View>
        
    );
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
    refreshContainer: {
        alignSelf: "center",
        backgroundColor: variables.primaryColor,
        borderRadius: 50,
        overflow: "hidden",
        bottom: 75
    },
    refresh: {
        padding: 5
    }
});