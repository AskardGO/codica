import React from 'react';
import styles from './weather.module.sass'
import {WeatherCard} from "./Card";
import {AddCityCard} from "./AddCityCard";

type Props = {

};
export const Weather = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerList}>
                    <WeatherCard/>
                    <WeatherCard/>
                    <WeatherCard/>
                    <WeatherCard/>
                    <WeatherCard/>
                    <AddCityCard/>
            </div>
        </div>
    );
};