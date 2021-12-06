import React from 'react';
import styles from './Weather.module.sass'

import {WeatherCard} from "./Card";
import {AddCityCard} from "./AddCityCard";

import {useTypeSelector} from "../../hooks/useTypeSelector";

export const Weather = () => {

    const {cities} = useTypeSelector(state => state.cities)

    React.useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(cities))
    }, [cities])

    return (
        <div className={styles.container}>
            <div className={styles.containerList}>
                {
                    cities.map((el, index) => <WeatherCard key={el.name} {...el} index={index}/>)
                }
                <AddCityCard/>
            </div>
        </div>
    );
};