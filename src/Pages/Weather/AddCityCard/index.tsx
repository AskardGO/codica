import React from 'react';
import styles from './AddCityCard.module.sass';

import {Box, Card, Typography, Modal, Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Search} from "./SearchComponent";
import {getWeatherByCityName} from "../../../app/services";
import {CityTypes} from "../PropsTypes";

export const AddCityCard = () => {

    const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false)
    const [city, setCity] = React.useState<CityTypes | null>(null)

    const handleOpen = () => setIsModalVisible(true)
    const handleClose = () => setIsModalVisible(false)

    const handleSave = () => {
        console.log('city', city)
        if(city) {

            (async () => {
                const data = await getWeatherByCityName(city.name, city.countryCode)
                console.log(data)
            })()
        }
    }

    return (
        <>
            <Card className={styles.container}
                  sx={{ minWidth: 200, minHeight: 250 }}
                  onClick={handleOpen}
            >
                <AddIcon color='action' titleAccess='Add City'/>
            </Card>
            <Modal
                className={styles.modal}
                open={isModalVisible}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.modalContent}>
                    <Typography id="modal-modal-title" variant="h6" component="h6" sx={{fontWeight: 'bolder'}}>
                        Add City
                    </Typography>
                    <Search setCity={setCity}/>
                    <div className={styles.modalContentButton}>
                        <Button type='submit'
                                variant="outlined"
                                sx={{maxWidth: 32}}
                                onClick={handleSave}
                        >
                            Save
                        </Button>
                    </div>
                </Box>
            </Modal>
        </>
    );
};