import React from 'react';

import {Popover, Typography} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import {HourlyWeatherType} from "../../../types";

type Props = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    el: HourlyWeatherType
};
export const WeatherPopover = ({isOpen, setIsOpen, el}: Props) => {

    React.useEffect(() => {
        console.log(el)
    })

    return (
        <Popover
            style={{userSelect: 'none', pointerEvents: 'none', position: 'absolute'}}
            id={isOpen ? 'simple-popover' : undefined}
            open={isOpen}
            onClose={setIsOpen}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <Typography sx={{p: 1}}>
                Clouds: {el.clouds}
            </Typography>
            <Typography sx={{p: 1}}>
                Humidity: {el.humidity}
            </Typography>
            <Typography sx={{p: 1}}>
                Pressure: {el.pressure}
            </Typography>
            {
                el.rain &&
                <Typography sx={{p: 1}}>
                    Rain: {el.rain['1h']}
                </Typography>
            }
            <Typography sx={{p: 1}}>
                Pressure: {el.pressure}
            </Typography>
            <Typography sx={{p: 1,display: 'flex', alignItems: 'center'}}>
                    Wind: <ArrowUpwardIcon sx={{m: 0}} style={{transform: `rotate(${el.wind_deg}deg)`}} fontSize='small'/> {el.wind_speed} m/s
            </Typography>
        </Popover>
    );
};