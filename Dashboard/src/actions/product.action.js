import axios from "axios"
import { baseUrl } from './../urlConfig';

export const addProduct = form => {
    return async dispatch =>{
        const res = await axios.post(`${baseUrl}product/create`, form);
        console.log(res);
    }
}