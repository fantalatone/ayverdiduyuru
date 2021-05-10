import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Feed() {

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
            renderItem={({ item }) => (
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.content}</Text>
                </View>
            )}
        />
    );
}