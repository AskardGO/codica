import React from 'react';
import {City} from "../../../store/reducers/cities";

import styles from './Card.module.sass'
import {Autorenew, Refresh} from "@mui/icons-material";
import {Button, CircularProgress} from "@mui/material";

import {getWeatherByCityName} from "../../../services/services";
import {DeleteCityButton} from "../DeleteCityButton";
import {Link} from "react-router-dom";


type Weather = {
    name: string,
    main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
    }
    metaData: {
        icon: string
        meta: string
    }
}

interface Props extends City {
    index: number
}

export const WeatherCard = ({name, tag, index}: Props) => {

    const [state, setState] = React.useState<Weather | null>(null)
    const [isLoad, setIsLoad] = React.useState<boolean>(true)

    React.useEffect(() => {
        updateData();
    }, [])

    React.useEffect(() => {
        if (state) {
            setTimeout(() => {
                setIsLoad(false)
            }, 2000)
        }
    }, [state])

    const updateData = async () => {
        setIsLoad(true)
        const data = await getWeatherByCityName(name, tag)

        if (data[0]) {

            const main: Weather['main'] = {...data[0].main}

            Object.entries(main).map((el) => {
                if (el[0].includes('temp')) {
                    //@ts-ignore
                    main[el[0]] = Math.floor(el[1] - 273.15)
                }
            })

            setState({
                name: data[0].name, main, metaData: {
                    icon: data[0].weather[0].icon,
                    meta: ''
                }
            })
        } else {
            alert(data[1])
        }
    }

    return (
        <>
            {
                state &&
                <div className={styles.card}>
                    {
                        isLoad ?
                            <CircularProgress/> :
                            <>
                                <div className={styles.cardTools}>
                                    <img src={`http://openweathermap.org/img/w/${state.metaData.icon}.png`}
                                         alt='Weather Icon'/>
                                    <div className={styles.tools}>
                                        <DeleteCityButton index={index}/>
                                        <Refresh className={styles.cardToolsRefresh} onClick={updateData}/>
                                    </div>

                                </div>
                                <div className={styles.cardCity}> {state.name} </div>
                                <div className="weather">
                                    <div className={styles.cardTemp}>{state.main.temp}°C</div>
                                </div>
                                <Button className={styles.cardButton}>
                                    <Link key={state.name}
                                          to={{
                                              pathname: '/weather/' + state.name,
                                          }}
                                          state={{...state, tag}}
                                    >
                                        More...
                                    </Link>
                                </Button>
                            </>
                    }
                </div>
            }
        </>
    );
};