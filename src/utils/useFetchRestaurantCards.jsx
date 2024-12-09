import { useEffect, useState } from "react";
import { RESTAURANT_LIST } from "./constants";

const useFetchRestaurantCards = () => {
    const [response, setResponse] = useState(null);
    
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch(RESTAURANT_LIST)
        const response = await data.json()
        setResponse(response);
    }

    return response;

}

export default useFetchRestaurantCards;