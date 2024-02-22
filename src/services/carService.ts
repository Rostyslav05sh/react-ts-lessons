import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/responseType";
import {ICar} from "../interfaces/carInterface";

const carService = {
    getAll: ():IRes<ICar[]> => apiService.get(urls.cars.base),
    create: (data:ICar):IRes<ICar> => apiService.post(urls.cars.base, data),
    updateById:(id:number, data:ICar):IRes<ICar> => apiService.put(urls.cars.ById(id), data),
    deleteById: (id:number):IRes<ICar> => apiService.delete(urls.cars.ById(id))
}

export {
    carService
}