import React from 'react';
import {Button} from "@mui/material";
import {store} from "../../app/store";
import {decrement, increment} from "../../app/actions";

export const Home = () => {

    const [num, setNum] = React.useState(store.getState().value)

    React.useEffect(() => {
        console.log(num)
    }, [num])

    return (
        <div>
            <Button onClick={() => store.dispatch(decrement())}>
                -
            </Button>

            <span> {num} </span>

            <Button onClick={() => store.dispatch(increment())}>
                +
            </Button>
        </div>
    );
};