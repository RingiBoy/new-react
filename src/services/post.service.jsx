import { urls } from "../constants/urls";
import { axiosService } from "./axios.service";

const postService = {
    getPostsById: (userId)=>axiosService.get(`${urls.posts}?userId=${userId}`)
}


export {postService}