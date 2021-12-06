import React, {PureComponent} from 'react';
import {useLocation} from "react-router-dom";

import {AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area} from 'recharts';

import styles from './WeatherCharts.module.sass'

export const WeatherChart = (props: any) => {

    let location = useLocation();

    React.useEffect(() => {
        console.log(location)
    })

    const data = [
        {
            name: 'Page A',
            uv: 40,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 30,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: -10,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 5,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: -20,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: -25,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 34,
            pv: 4300,
            amt: 2100,
        },
    ]

    const gradientOffset = () => {
        const dataMax = Math.max(...data.map((i) => i.uv));
        const dataMin = Math.min(...data.map((i) => i.uv));

        if (dataMax <= 0) {
            return 0;
        }
        if (dataMin >= 0) {
            return 1;
        }

        return dataMax / (dataMax - dataMin);
    };

    const off = gradientOffset();


    return (
        <div className={styles.container}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <defs>
                        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset={off} stopColor="green" stopOpacity={1}/>
                            <stop offset={off} stopColor="red" stopOpacity={1}/>
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};