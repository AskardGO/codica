import * as Types from './types'

const addCity = (payload: Types.AddCity['payload']): Types.AddCity => ({
    type: Types.CitiesTypes.ADD,
    payload
})

const removeCity = (payload: Types.RemoveCity['payload']): Types.RemoveCity => ({
    type: Types.CitiesTypes.REMOVE,
    payload
})

export const actions = {
    addCity,
    removeCity
}