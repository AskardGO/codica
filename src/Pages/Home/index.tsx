import React from 'react';
import {Button} from "@mui/material";
import {store} from "../../app/store";
import {addCity} from "../../app/actions";
import {useDispatch} from "react-redux";

export const Home = () => {

    const [state, setState] = React.useState(store.getState())

    const dispatch = useDispatch()

    React.useEffect(() => {
        alert(store.getState())
    })

    return (
        <div>
            <Button onClick={() => {
                 store.dispatch(addCity({cityName: 'London', countryTag: 'GB'}))

            }}>
                Add
            </Button>
        </div>
    );
};