import React , {useState, useEffect} from "react";
import {View, StyleSheet, Text, ScrollView} from "react-native"
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
        <>
            <SearchBar 
            input={input} 
            handleChange={setInput}
            handleSubmit={ () => searchApi(input)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>
            : null}
            {/* <Text style={styles.text}>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList 
                results={filterResultsByPrice("$")} 
                title="Cost Effective"
                />

                <ResultsList 
                results={filterResultsByPrice("$$")} 
                title="Bit Pricier"
                />
                
                <ResultsList 
                results={filterResultsByPrice("$$$")} 
                title="Big Spender"
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        marginLeft: 15
    }
});

export default Home;