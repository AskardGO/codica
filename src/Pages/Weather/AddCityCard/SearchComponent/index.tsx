import React from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {getCities} from "../../../../app/services";
import {CityTypes} from "../../PropsTypes";

type Props = {
    setCity: React.Dispatch<React.SetStateAction<CityTypes | null>>
}

export const Search = ({setCity}: Props) => {

    const [partOfCityName, setPartOfCityName] = React.useState<string | null>(null)
    const [list, setList] = React.useState([])

    React.useEffect(() => {
        if(partOfCityName) {
            (async () => {
                const data = await getCities(partOfCityName)
                if (data[0]) {
                    setList(data[0])
                } else {
                    alert(data[1])
                }
            })()
        }
    }, [partOfCityName])

    return (
        <Autocomplete
            freeSolo
            id="combo-box-demo"
            disableClearable
            options={list}
            getOptionLabel={(option: {city: string}) => option.city}
            renderInput={(params) => (
                <TextField
                    required
                    {...params}
                    label="Search input"
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                    }}
                    onChange={({target}) => setPartOfCityName(target.value)}
                />
            )}
            onChange={(_, value: any) => setCity(value)}
        />
    );
};