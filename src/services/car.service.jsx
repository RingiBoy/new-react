import { urls } from "../constants/urls";
import { axiosService } from "./axios.service";





const carService={
    getAll:()=>axiosService.get(urls.cars),
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    create:(car)=>axiosService.post(urls.cars, car),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}


export{carService}