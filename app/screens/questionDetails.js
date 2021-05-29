import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import variables from "../styles/variables";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function QuestionsDetailsScreen({ navigation }) {
    var date = new Date(navigation.getParam("date").toString())
    var d = moment(date).format("DD/MM/YYYY")

    const [baseURL, setBaseURL] = useState("");

    async function load() {
        try {
            const _url = await AsyncStorage.getItem("@baseURL");
            setBaseURL(_url);
            return _url;
        } catch (e) {
            throw e;
        }
    }

    useEffect(() => {
        load().then(url => setBaseURL(url)).catch(err => console.log(err))
    }, []);

    const deleteHandler = async (_url) => {
        const url = `http://${_url}:7475/soru/sil`
        await fetch(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                id: navigation.getParam("_id")
            })
        })
        .then(() => navigation.navigate("Feed"))
        .catch(err => console.log(err))
    }

    {navigation.getParam("answer") == undefined ? (<View></View>) : (<View></View>)}
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
            {navigation.getParam("answer") !== undefined ? (
                <View>
                    <Text style={styles.title}>{navigation.getParam("question")} ?</Text>
                    <Text style={styles.author} numberOfLines={1}>{navigation.getParam("senderName")} tarafından {d}'de soruldu.</Text>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Cevap : {navigation.getParam("answer")}</Text>
                    </View>
                </View>
            ) : (
            <View>
                <Text style={styles.title}>{navigation.getParam("question")} ?</Text>
                <Text style={styles.author} numberOfLines={1}>{navigation.getParam("senderName")} tarafından {d} tarihinde soruldu.</Text>
                <Text style={styles.warn}>Sorun Hala Cevaplanmamışken Silebilirsin</Text>
                <TouchableNativeFeedback style={styles.delete} onPress={() => {
                 deleteHandler(baseURL)   
                }}>
                    <Text style={styles.deleteText}>Sil</Text>
                </TouchableNativeFeedback>
            </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
        padding: 20,
        flex: 1
    },
    title: {
        fontSize: 22,
        marginBottom: 10
    },
    descriptionContainer: {
        marginVertical: 10,
    },
    description: {
        fontSize: 22,
    },
    author: {
        color: variables.textColor
    },
    warn: {
        marginVertical: 10,
        backgroundColor: "#FFD503",
        padding: 10,
        borderRadius: 50,
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    delete: {
        backgroundColor: "red",
        padding: 10,
        alignItems: "center",
        borderRadius: 10,
    },
    deleteText: {
        fontSize: 20,
        color: "white"
    }
});