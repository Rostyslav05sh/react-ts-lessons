import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types/responseType";
import {ICar, IPagination} from "../interfaces";

const carService = {
    getAll: ():IRes<IPagination<ICar>> => apiService.get(urls.cars.base),
    getById: (id:number):IRes<ICar> => apiService.get(urls.cars.byId(id))
}

export {
    carService
}