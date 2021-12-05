import {CitiesState as State, CitiesTypes} from "./types";
import {RootAction} from "../index";


const initialState = ():State => {
    const data = JSON.parse(localStorage.getItem('cities') as string)
    return {
        cities: data?data:[]
    }
}

export const citiesReducer = (state: State = initialState(), action: RootAction):State => {

    switch (action.type) {
        case CitiesTypes.ADD:
            return {...state, cities: [...state.cities, action.payload]}

        default: return state
    }
}