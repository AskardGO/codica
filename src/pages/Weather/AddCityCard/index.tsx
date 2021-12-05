import React from 'react';
import styles from './AddCityCard.module.sass';

import {Box, Card, Typography, Modal, Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Search} from "./SearchComponent";
import {getWeatherByCityName} from "../../../services/services";
import {CityTypes} from "../PropsTypes";
import {useActions} from "../../../hooks/useActions";

export const AddCityCard = () => {

    const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false)
    const [city, setCity] = React.useState<CityTypes | null>(null)

    const handleModalVisible = () => setIsModalVisible(!isModalVisible)

<<<<<<< HEAD:src/Pages/Weather/AddCityCard/index.tsx
    const handleSave = () => {
        if(city) {

            (async () => {
                const data = await getWeatherByCityName(city.name, city.countryCode)
            })()
        }
=======
    const {citiesActions} = useActions()

    const handleSave = () => {
        if(city) citiesActions.addCity({name: city.name, tag: city.countryCode})
        //     (async () => {
        //         const data = await getWeatherByCityName(city.name, city.countryCode)
        //     })()
        // }
>>>>>>> 58e4ee1 (update store and ability of update data on card):src/pages/Weather/AddCityCard/index.tsx
    }

    return (
        <>
            <Card className={styles.container}
                  sx={{ minWidth: 200, minHeight: 250 }}
                  onClick={handleModalVisible}
            >
                <AddIcon color='action' titleAccess='Add City'/>
            </Card>
            <Modal
                className={styles.modal}
                open={isModalVisible}
                onClose={handleModalVisible}
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