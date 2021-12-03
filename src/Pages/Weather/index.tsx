import React from 'react';
import styles from './weather.module.sass'
import {WeatherCard} from "./Card";
import {AddCityCard} from "./AddCityCard";
import {store} from "../../app/store";

type Props = {

};
export const Weather = () => {

    const [state, setState] = React.useState(store.getState())

    console.log(state)

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