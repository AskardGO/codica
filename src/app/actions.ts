import {CITY} from "./reducerTypes";

export function addCity({cityName, countryTag}: any) {
    return {
        type: 'ADD_CITY' as const,
        payload: {
            cityName: cityName,
            countryTag: countryTag
        }
    }
}

export function deleteCity(id: number) {
    return {
        type: CITY.DEL_CITY,
        id: id
    }
}