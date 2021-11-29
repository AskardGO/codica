import React from 'react';
import {Card, CardContent, CardActions, Typography, Button} from "@mui/material";

import styles from './Card.module.sass'

type Props = {

};
export const WeatherCard = () => {
    return (
        <Card className={styles.container} sx={{ minWidth: 200, minHeight: 250 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};