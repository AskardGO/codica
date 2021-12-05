import {combineReducers, Reducer} from "redux";

//reducers
import {CitiesActions, citiesReducer} from "./cities";

const allReducers = combineReducers({
    cities: citiesReducer
})

export type RootState = ReturnType<typeof allReducers>
export type RootAction = CitiesActions

export const rootReducer: Reducer<RootState, RootAction> = (state, action) => {
    return allReducers(state, action)
}