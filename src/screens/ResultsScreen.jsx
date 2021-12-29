import React , {useState, useEffect} from "react";
import {View, StyleSheet, Text, ScrollView, FlatList, Image} from "react-native";
import yelp from "../api/yelp";
import { FontAwesome} from '@expo/vector-icons';

const ResultsScreen = ({navigation}) => {
    const [detail, setDetail] = useState(null);
    const id = navigation.getParam("id"); //llamo al id pasado en el componente ResultList
    let key = 0
    const getDetail = async (id) => {
        const response = await yelp.get(`/${id}`);
        response.data;
        setDetail(response.data)
    }

    useEffect(() => {
        getDetail(id);
    }, [])

    if(!detail) {
        return null;
    }
    return (
        <>
            <Text style={styles.name}>{detail.name}</Text>
            <Text style={styles.rating}>{detail.rating} <FontAwesome name="star" size={16} color="black" /> {detail.review_count} Reviews</Text>
            <Text style={styles.rating}><FontAwesome name="phone" size={16} color="black" /> {detail.display_phone}</Text>
            <Text style={styles.rating}><FontAwesome name="location-arrow" size={16} color="black" /> {detail.location.display_address[1]}</Text>
            <FlatList
            style={styles.photos}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(photo) => photo}
            data={detail.photos}
            renderItem={({item}) => {
                return <Image style={styles.img} source={{uri: item}}/>
            }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 300,
        height: 200,
        margin: 15
    },
    photos : {
        flex: 1
    },
    name: {
        marginHorizontal: 15,
        marginVertical: 5,
        fontWeight: "bold",
        fontSize: 24
    },
    rating: {
        marginLeft: 15,
        fontSize: 16,
        marginBottom: 5
    }
})

export default ResultsScreen;