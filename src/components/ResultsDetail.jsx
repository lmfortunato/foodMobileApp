import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const ResultsDetail = ({result}) => {
    return (
        <View>
            <Image
            style={styles.img}
            source={{uri: result.image_url}}/>
            <Text>{result.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    img: {
        height: 150,
        width: 250,
        borderRadius: 4
    }
});

export default ResultsDetail;