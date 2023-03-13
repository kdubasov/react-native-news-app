import {API_KEY} from "../constants/api";
import axios from "axios";
import {useEffect, useState} from "react";

export const useApi = req => {

    const [data,setData] = useState({});
    const [error,setError] = useState("");

    const url = 'https://newsapi.org/v2/top-headlines?' + req + API_KEY;

    useEffect(() => {
        axios.get(url)
            .then(res => setData(res.data))
            .catch(err => setError(err.message))
    },[req])

    return {
        data: data,
        error: error,
    }
}
