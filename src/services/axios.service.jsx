import axios from "axios";

import UrlaMain from "../constants/urls";



const axiosService = axios.create({baseURL:UrlaMain});


export  {axiosService}