import React from 'react';
import {Button} from "@mui/material";

//hooks
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActions} from "../../hooks/useActions";

export const Home = () => {

    const {citiesActions} = useActions()

    return (
        <div>
            <Button onClick={() => citiesActions.addCity({name: 'London', tag: 'GB'})}>
                Add
            </Button>
        </div>
    );
};