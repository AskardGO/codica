import {combineReducers} from "redux";
import {Store, Weather} from "./types/storeType";
import {AddCityAction, DeleteCityAction} from "./types/actionTypies";
import {CITY} from "./reducerTypes";

export const cities = (state: any = [], action: any): any => {
    //@ts-ignore
    switch (action.type) {
        case 'ADD_CITY':
            return [
                ...state, {
                    cityName: action.payload.cityName as string,
                    countryTag: action.payload.countryTag as string
                }
            ]
        case CITY.DEL_CITY: {
            console.log(action.id)
            break
        }

        default:
            return state
    }
}

//@ts-ignore
const weather = (state: Store, action) => {
    return state.weather
}

export const reducers = combineReducers({cities, weather})