import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Keyboard, FlatList, ActivityIndicator } from "react-native";
import { TouchableWithoutFeedback, TouchableNativeFeedback } from "react-native-gesture-handler";
import variables from "../styles/variables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

export default function AskQuestionScreen({ navigation }) {

    const [question, setQuestion] = useState("");
    const [senderName, setSenderName] = useState("");
    const [senderSchoolNo, setSenderSchoolNo] = useState("");
    const [senderGrade, setSenderGrade] = useState("");

    const [baseURL, setBaseURL] = useState("");

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
        load().then(url => getQuestions(url))
    }, []);

    const [myData, setMyData] = useState([]);

    const setParams = async () => {
        const name = await AsyncStorage.getItem("@duyuru_name");
        const schoolNo = await AsyncStorage.getItem("@duyuru_schoolNo");
        const grade = await AsyncStorage.getItem("@duyuru_grade");
        setSenderName(name);
        setSenderSchoolNo(schoolNo);
        setSenderGrade(grade);
    }

    const getQuestions = async (_url) => {
        const url = `http://${_url}:7475/soru/my`
        fetch(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    senderSchoolNo: await AsyncStorage.getItem("@duyuru_schoolNo"),
                })
            })
            .then((res) => res.json())
            .then(data => setMyData(data.reverse()))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getQuestions()
        setParams().catch(err => console.log(err));
    }, []);

    const sendQuestion = async () => {
        const url = `http://${baseURL}:7475/soru/yeni`
        await fetch(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                question: question,
                senderName: senderName,
                senderSchoolNo: senderSchoolNo,
                senderGrade: senderGrade
            })
        })
        .then(() => setQuestion(""))
        .then(() => getQuestions(baseURL))
        .catch(err => console.log(err))
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View>
                <Text style={styles.label}>Lütfen Sorunuzu Yazınız</Text>
                <TextInput 
                    value={question}
                    onChangeText={setQuestion}
                    style={styles.question}
                    multiline={true}
                />
                <View style={styles.sendContainer}>
                    <TouchableNativeFeedback style={styles.send} onPress={sendQuestion}>
                        <Text style={styles.sendText}>Sor!</Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View>
                <Text style={styles.asked}>Sorduğun Sorular</Text>
                <FlatList
                    style={{maxHeight: 440}}
                    data={myData}
                    keyExtractor={({ _id }) => _id}
                    renderItem={({ item }) =>  {

                        var date = new Date(item.date.toString())
                        var d = moment(date).format("DD/MM/YYYY")

                        return (
                            <TouchableNativeFeedback onPress={() => navigation.navigate("QuestionDetails", item)}>
                                <View style={styles.questionContainer}>
                                    <Text style={styles.questionTitle}>{item.question}</Text>
                                    <Text>{d}'de soruldu.</Text>
                                </View>
                            </TouchableNativeFeedback>
                        )
                    }}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    asked: {
        fontSize: 24,
        textAlign: "center",
        marginVertical: 15
    },  
    label: {
        fontSize: 24,
        padding: 10
    },
    question: {
        color: variables.textColor,
        backgroundColor: "white",
        padding: 10,
        fontSize: 20,
        margin: 10,
        borderRadius: 10
    },
    sendContainer: {
        overflow: "hidden",
        marginHorizontal: 90,
        borderRadius: 10,
    },
    send: {
        backgroundColor: variables.primaryColor,
        padding: 10,
    },
    sendText: {
        fontSize: 22,
        textAlign: "center",
        color: "white"
    },
    questionContainer: {
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
        padding: 15
    },
    questionTitle: {
        fontSize: 18
    },
});