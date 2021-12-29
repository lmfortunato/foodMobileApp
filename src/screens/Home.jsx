import React , {useState, useEffect} from "react";
import {View, StyleSheet, Text} from "react-native"
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const Home = () => {
    const [input, setInput] = useState("");
    const [searchApi, errorMessage, results] = useResults(); //traigo los hooks creados en useResults
    const filterResultsByPrice = (price) => {
        //price ==="$" || "$$" || "$$$"
        return results.filter(result => {
            return result.price === price;
        })
    }
    return(
        <View>
            <SearchBar 
            input={input} 
            handleChange={setInput}
            handleSubmit={ () => searchApi(input)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>
            : null}
            <Text>We have found {results.length} results</Text>

            <ResultsList 
            results={filterResultsByPrice("$")} 
            title="Cheaper"/>

            <ResultsList 
            results={filterResultsByPrice("$$")} 
            title="Bit Pricier"/>

            <ResultsList 
            results={filterResultsByPrice("$$$")} 
            title="Expensive"/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default Home;