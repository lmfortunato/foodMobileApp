import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchInput) => {
        try{
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchInput,
                    location: "san jose"
                }
            });
            setResults(response.data.businesses)
        } catch (error){
            setErrorMessage("Something went wrong")
        }
    }

    useEffect(() => {
        searchApi("pasta"); //cuando se monta el componente, va a buscar automaticamente un resultado por default.
    }, [])

    return [searchApi, errorMessage, results] // retornamos lo que necesita el componente home
}