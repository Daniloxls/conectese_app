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
          'X-RapidAPI-Key': '1d7ca6eb0amsh57afa25af325c1dp12da26jsn7925fd14565d',
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