import React from 'react';
import styles from './weather.module.sass'
import {WeatherCard} from "./Card";
import {AddCityCard} from "./AddCityCard";
import {store} from "../../store";
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
                    cities.map((el) => <WeatherCard key={el.name} {...el}/>)
                }
                <AddCityCard/>
            </div>
        </div>
    );
};