import axios from "axios";

import {apiService} from "./apiService";
import {urls} from "../constants";
import {IUser} from "../interfaces";
import {IRes} from "../types/responseType";

const userService = {
    getAll: ():IRes<IUser[]> => apiService.get(urls.cars.base),
    getById: (id:number):IRes<IUser> => axios.get(urls.cars.ById(id))
}

export {
    userService
}