import React, { useState, useEffect } from "react";
import { FlatList, Image, Text, View, StyleSheet, RefreshControl } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons"
import variables from "../styles/variables";

export default function Feed({ navigation }) {

    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        refreshData().then(data => setData(data))
    }, []);

    const refreshData = () => {
        return fetch('http://192.168.1.221:7475/duyuru/cek')
            .then((response) => response.json())
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing({ refresh: true });
        refreshData().then(data => setData(data)).then(() => setRefreshing(false));
      }, []);
        
    return (
        <View>
            <FlatList
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                data={data}
                keyExtractor={({ _id }, index) => _id}
                renderItem={({ item }) =>  {
                    return (
                        <View style={styles.item}>
                            {item.banner !== undefined ? (
                                <TouchableNativeFeedback onPressOut={() => navigation.navigate("Details", item)}>
                                    <Image source={{uri: `data:${item.banner.contentType};base64,${item.banner.data}`}} style={styles.image} />
                                    <View style={styles.ccontainer}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.description} numberOfLines={2}>{item.content}</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            ) : (
                                <TouchableNativeFeedback onPress={() => navigation.navigate("Details", item)}>
                                    <View style={styles.ccontainer}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.description} numberOfLines={2}>{item.content}</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            ) }
                        </View>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    ccontainer: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },
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
    title: {
        fontSize: 20,
    },
    description: {
        marginTop: 3,
        fontSize: 15,
        color: variables.textColor
    },
});