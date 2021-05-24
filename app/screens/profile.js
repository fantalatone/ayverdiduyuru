import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Keyboard, Modal, Pressable } from "react-native";
import { TouchableWithoutFeedback, TouchableNativeFeedback } from "react-native-gesture-handler";
import variables from "../styles/variables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default function ProfileScreen() {
    
    const [name, setName] = useState("");
    const [schoolNo, setSchoolno] = useState("");
    const [grade, setGrade] = useState("");

    const [visible, setVisible] = useState(false);

    const saveDataLocal = async () => {
        try {
            await AsyncStorage.setItem("@duyuru_name", name)
            await AsyncStorage.setItem("@duyuru_schoolNo", schoolNo)
            await AsyncStorage.setItem("@duyuru_grade", grade)
            setVisible(true);
        } catch (e) {
            throw e;
        }
    }

    useEffect(() => {
        loadDataLocal();
    }, []);
    
    const loadDataLocal = async () => {
        try {
            const _name = await AsyncStorage.getItem("@duyuru_name")
            setName(_name)
            const _schoolNo = await AsyncStorage.getItem("@duyuru_schoolNo")
            setSchoolno(_schoolNo)
            const _grade = await AsyncStorage.getItem("@duyuru_grade")
            setGrade(_grade)
        } catch (e) {
            throw e;
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAwareScrollView>
                <Modal
                    animationType="fade"
                    visible={visible}
                    transparent={true}
                    onRequestClose={() => {
                        setVisible(!visible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Başarıyla Kaydedildi! 👍</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setVisible(!visible)}
                            >
                                <Text style={styles.textStyle}>Tamam</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <View style={styles.group}>
                    <Text style={styles.label}>Ad Soyad :</Text>
                    <TextInput 
                        value={name}
                        onChangeText={setName}
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>Okul Numarası :</Text>
                    <TextInput 
                        keyboardType={"numeric"}
                        value={schoolNo}
                        onChangeText={setSchoolno}
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>Sınıf / Şube:</Text>
                    <TextInput 
                        value={grade}
                        onChangeText={setGrade}
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.saveContainer}>
                    <TouchableNativeFeedback style={styles.save} onPress={() => saveDataLocal("Arda")}>
                        <Text style={styles.saveText}>Kaydet</Text>
                    </TouchableNativeFeedback>
                </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "white",
        backgroundColor: variables.primaryColor,
        marginBottom: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 3,
        marginHorizontal: 80,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },
    group: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    label: {
        fontSize: 22,
        paddingHorizontal: 10,
    },
    inputField: {
        color: variables.textColor,
        padding: 10,
        fontSize: 19,
        borderBottomColor: variables.primaryColor,
        borderBottomWidth: 3,
        borderRadius: 10,
    },
    saveContainer: {
        borderRadius: 10,
        overflow: "hidden",
        margin: 10
    },
    save: {
        backgroundColor: variables.primaryColor,
        padding: 10,
        alignItems: "center"
    },
    saveText: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
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
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: variables.primaryColor,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        fontSize: 18,
        textAlign: "center"
    }
});