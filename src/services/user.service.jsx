import { urls } from "../constants/urls";
import { axiosService } from "./axios.service";

const userService = {
    getAll:()=>axiosService.get(urls.users)
}



export {userService}