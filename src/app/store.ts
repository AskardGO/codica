import {createStore} from "redux";
import {INCREMENT, DECREMENT} from "./types";

type Store = {
    value: number
}

export const store = createStore(
    (state: Store = { value: 0 }, action) => {
        switch (action.type) {
            case INCREMENT:
                return { value: state.value + 1 }
            case DECREMENT:
                return { value: state.value - 1 }
            default:
                return state;
        }
    }
)
