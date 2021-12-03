import {CITY} from "../reducerTypes";

export type AddCityAction = (
    cityName: string,
    countryName: string,
) => {
    type: 'ADD_CITY',
    cityName: string,
    countryName: string
}

export type DeleteCityAction = (
    id: number
) => {
    type: 'DEL_CITY'
    id: number
}