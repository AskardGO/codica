import {createStore} from "redux";
import {reducers, cities} from "./reducers";
import {Store} from "./types/storeType";

const reducer = ({type, state}: {type: string, state: number}): any => {
    switch (type) {
        case ('UP'):
            return state + 1
        case ('DOWN'):
            return state - 1
    }
}

const st: any = 0

// @ts-ignore
export const store = createStore(cities)
