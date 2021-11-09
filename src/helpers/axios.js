import axios from "axios";
import { api } from "../urlConfig";



const axiosIntance = axios.create({
    baseURL: api ,
    // headers:{
    //     'Authorization': ''
    // }
})


export default axiosIntance;