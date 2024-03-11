import {apiService} from "./ApiService";
import {urls} from "../constants";
import {ICar} from "../interfaces";
import {IRes} from "../types";

const carService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars.base),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.cars.base, data),
    updateById: (id: number, data: ICar): IRes<ICar> => apiService.put(urls.cars.ById(id), data),
    deleteById: (id: number): IRes<void> => apiService.delete(urls.cars.ById(id))
}

export {
    carService
}