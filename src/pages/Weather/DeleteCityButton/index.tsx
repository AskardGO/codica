import React from 'react';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {Button} from "@mui/material";
import {useActions} from "../../../hooks/useActions";

type Props = {
    index: number
};

export const DeleteCityButton = ({index}:Props) => {

    const {citiesActions} = useActions()

    const handleOnClick = () => {
        citiesActions.removeCity(index)
        console.log(index)
    }

    return (<RemoveCircleIcon onClick={handleOnClick}/>);
};