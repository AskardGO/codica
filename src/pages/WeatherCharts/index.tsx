import React from 'react';
import {useLocation} from "react-router-dom";


import styles from './WeatherCharts.module.sass'
import {getHourlyWeatherByCityName} from "../../services/services";
import {convertTemp} from "../../components/convert/convertTemperature";

import {CircularProgress, Paper, Typography} from "@mui/material";
import {convertTime} from "../../components/convert/convertTime";
import {WeatherPopover} from "./WeatherPopover";
import {HourlyWeatherType} from "../../types";
import {TempBlock} from "./TempBlock";

export const WeatherChart = () => {

    const [hourlyWeatherArray, setHourlyWeatherArray] = React.useState<HourlyWeatherType[] | []>([])
    const [isLoad, setIsLoad] = React.useState<boolean>(true)
    const location = useLocation();

    React.useEffect(() => {
        (async () => {
            const data = await getHourlyWeatherByCityName(location.state.metaData.coord)
            if (data[0]) {
                // console.log(new Date(1638806400 * 1000))
                setHourlyWeatherArray(data[0].hourly)
            } else {
                alert(data[1])
            }
        })()
    }, [])

    React.useEffect(() => {
        setTimeout(() => setIsLoad(false), 1500)
    })

    // @ts-ignore
    const Blocks = () => {

        return (
            <div className={styles.containerChartBlocks}>
                {
                    hourlyWeatherArray.slice(0, 12).map((el: HourlyWeatherType) => {
                        return (
                            <TempBlock {...el}/>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={styles.container}>
            {
                isLoad?<CircularProgress/>:
                    <>
                        <Typography variant="h3" gutterBottom component="div">
                            {location.state.name}
                        </Typography>
                        <Paper className={styles.containerChart} elevation={3}>
                            <div className={styles.containerChartZero}/>
                            <Blocks/>
                        </Paper>
                    </>
            }
        </div>
    );
};