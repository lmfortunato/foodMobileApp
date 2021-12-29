import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import { FontAwesome} from '@expo/vector-icons';

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image
            style={styles.img}
            source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} <FontAwesome name="star" size={16} color="black" />, {result.review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft:15
    },
    img: {
        height: 150,
        width: 250,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold"
    }
});

export default ResultsDetail;