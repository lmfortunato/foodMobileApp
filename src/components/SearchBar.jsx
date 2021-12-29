import React from "react";
import {View, StyleSheet, TextInput} from "react-native"
import {FontAwesome} from "@expo/vector-icons";

const SearchBar = ({input, handleChange, handleSubmit}) => {
    return(
        <View style={styles.bg}>
            <FontAwesome name="search" style={styles.icon} size={24} color="black" />
            <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            style={styles.inputStyle}
            value={input}
            onChangeText={handleChange}
            onEndEditing={handleSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection:"row"
    },
    inputStyle: {
        flex:1,
        fontSize: 18
    },
    icon: {
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;