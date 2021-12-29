import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title, results, navigation}) => {
    if(!results.length) {
        return null;
    }
    return (
        <View styles={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            keyExtractor={(result) => result.id} //id traido de la api
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("ResultsScreen", {id: item.id})}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
                
            }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom:10
    }
});

export default withNavigation(ResultsList) // paso withNavigation para no tener que pasar la prop por el home 