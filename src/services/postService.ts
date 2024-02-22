import {apiService} from "./apiService";
import {urls} from "../constants";
import {IPost} from "../interfaces";
import {IRes} from "../types/responseType";

const postService = {
    getAll: ():IRes<IPost[]> => apiService.get(urls.posts.base),
    getByIdL: (id:number):IRes<IPost> => apiService.get(urls.posts.ById(id))
}

export {
    postService
}