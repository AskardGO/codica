import React from 'react';
import {Card, CardContent, CardActions, Typography, Button} from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';

import styles from './Card.module.sass'

type Props = {};
export const WeatherCard = () => {

    const updateData = () => {

    }

    return (
        <div className={styles.card}>
            <div className={styles.cardTools}>
                <RefreshIcon/>
            </div>
            <div className={styles.cardCity}>Eindhoven</div>
            <div className={styles.cardDate}>29 september 2015</div>
            <div className="weather">
                <div className={styles.cardSun}> </div>
                <div className={styles.cardTemp}>12°C</div>
            </div>
        </div>

    );
};