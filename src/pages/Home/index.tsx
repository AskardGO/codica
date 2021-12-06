import React from 'react';
import {Coords} from "../../types";

import {usePosition} from "../../hooks/usePosition";

import {Box, Paper, Typography} from "@mui/material";
import styles from './Home.module.sass'
import {getWeatherByCoords} from "../../services/services";


type Weather = {
    name: string
    main: {
        pressure: number
        temp: number
    }
}

export const Home = () => {

    const [weather, setWeather] = React.useState<Weather | null>(null)
    const {latitude, longitude} = usePosition(true, {enableHighAccuracy: true})

    React.useEffect(() => {
        (async () => {
            if(latitude && longitude) {
                const data = await getWeatherByCoords({lat: latitude, lon: longitude})
                if(data[0]) {
                    console.log(data[0])
                    setWeather(data[0])
                } else {
                    alert(data[1])
                }
            }
        })()
    }, [latitude, longitude])

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 400,
                        height: 300
                    },
                }}
                className={styles.container}
            >
                <Paper elevation={3}>
                    {
                        weather?
                            <Typography margin={2} variant="h5" gutterBottom component="div">
                                <span> Meteostation: {weather.name} </span>
                                <span>
                                    Pressure: {weather.main.pressure}
                                </span>
                                <span>
                                    Temperature: {Math.floor(weather.main.temp - 273)}°C
                                </span>
                            </Typography>
                            :
                            <Typography>
                                No Data...
                            </Typography>
                    }
                </Paper>
            </Box>
        </div>
    );
};