import React, { useState, useEffect } from "react";
import { FlatList, Image, Text, View, StyleSheet, Modal, Pressable, TextInput } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons"
import variables from "../styles/variables";
import AnnouncementItem from "../components/ann.item";
import QAItem from "../components/qa.item";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FeedScreen({ navigation }) {

    const [baseURL, setBaseURL] = useState("");
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const _url = await AsyncStorage.getItem("@baseURL");
                setBaseURL(_url);
                return _url;
            } catch (e) {
                throw e;
            }
        }
        load().then(url => refreshData(url).then(data => setData(data)))
    }, []);

    const refreshData = (_url) => {
        const url = `http://${_url}:7475/cek`
        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }

    const saveBaseURL = async () => {
        try {
            await AsyncStorage.setItem("@baseURL", baseURL)
        } catch (e) {
            throw e;
        }
        setVisible(!visible)
        refreshData(baseURL).then(data => setData(data))
    }

    return (
        <View style={{marginTop: 5}}>
            <Modal
                animationType="fade"
                visible={visible}
                transparent={true}
                onRequestClose={() => {
                    setVisible(!visible);
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>[TEST VERSİYONU ÖZELLİĞİ]</Text>
                    <TextInput 
                        keyboardType={"default"}
                        value={baseURL}
                        onChangeText={setBaseURL}
                        style={styles.inputField}
                        placeholder={"Sunucu bağlantı adresi giriniz."}
                        />
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => saveBaseURL()}
                    >
                        <Text style={styles.textStyle}>Tamam</Text>
                    </Pressable>
                </View>
            </Modal>
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
                <TouchableNativeFeedback style={styles.refresh} onPress={() => refreshData(baseURL).then(data => setData(data))}>
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
    inputField: {
        color: variables.textColor,
        padding: 10,
        width: "100%",
        marginBottom: 15,
        fontSize: 19,
        borderBottomColor: "#696969",
        borderBottomWidth: 3,
        borderRadius: 10,
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
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#696969",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 18,
        textAlign: "center"
    }
});