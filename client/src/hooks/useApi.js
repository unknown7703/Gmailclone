import API from '../services/api';
import {useState} from 'react';
const useApi=(urlObject)=>{
    const [response,setResponse] = useState(null);
    const [error,setError]=useState("");
    const [isLoading,setIsLoading]=useState(false);

    const call =async(payload)=>
    {
        setResponse(null);
        setError("");
        setIsLoading(true);
        try {
           let res =await API(urlObject,payload); 
            setResponse(res.data);
        } catch (error) {
            setError(error.message);
        }
        finally{
            setIsLoading(false);
        }
    }
    return {call,response,error,isLoading};
}

export default useApi;