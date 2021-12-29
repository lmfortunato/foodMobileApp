import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            keyExtractor={(result) => result.id} //id traido de la api
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            renderItem={({item}) => {
                return <ResultsDetail result={item}/>
            }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default ResultsList