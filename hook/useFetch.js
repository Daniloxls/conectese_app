import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': 'aa280f0c25mshdcf7d8b6c3018aep134b90jsn2b7147ecebe3',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query }
      };

      const fetchData = async () =>{
        setisLoading(true);
        try{
            const response = await axios.request(options);

            setData(response.data.data);
            setisLoading(false);
        } catch(error){
            setError(error);
            alert('Houve um erro!');

        }finally{
            setisLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

      const refetch = () => {
        setisLoading(true);
        fetchData();
      }

      return {data, isLoading, error, refetch};
    }

    export default useFetch