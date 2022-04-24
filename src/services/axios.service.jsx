import axios from "axios";
import baseUrla from "../constants/urls";




const axiosService = axios.create({baseURL:baseUrla});

export{axiosService}