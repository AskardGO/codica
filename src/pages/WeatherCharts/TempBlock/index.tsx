import React from 'react';
import styles from './TempBlock.module.sass'
import {WeatherPopover} from "../WeatherPopover";
import {convertTime} from "../../../components/convert/convertTime";
import {convertTemp} from "../../../components/convert/convertTemperature";
import {HourlyWeatherType} from "../../../types";

type Props = {

};
export const TempBlock = (el:HourlyWeatherType) => {

    const [isPopVisible, setIsPopVisible] = React.useState<boolean>(false)

    const switchColor = (temp: number):string => {
        if(temp > 0) return `rgba(249, 127, 81, ${temp/4})`
        if(temp < 0) return `rgba(25, 118, 210, ${temp/4 * -1})`
        return 'rgba(202, 211, 200,1.0)'
    }

    return (
        <>
            <div className={styles.block}
                 onMouseEnter={() => {
                     setIsPopVisible(true)
                 }}
                 onMouseLeave={() => {
                     setIsPopVisible(false)
                 }}
            >
            <span className={styles.blockDate}>
                                    { convertTime(el.dt) }
                                </span>
                <div
                    className={styles.blockTemp}
                    style={{
                        transform: `translateY(${convertTemp(el.temp) * -4}px)`,
                    }}
                >
                    <div style={{
                        backgroundColor: switchColor(convertTemp(el.temp))
                    }}>
                        {convertTemp(el.temp)}
                    </div>
                </div>
            </div>
            <WeatherPopover isOpen={isPopVisible} setIsOpen={setIsPopVisible} el={el}/>
        </>
    );
};