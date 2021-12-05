export type CitiesState = {
    cities: City[]
}

export type City = {
    name: string,
    tag: string
}

export enum CitiesTypes {
    ADD = 'cities|Add',
    REMOVE = 'cities|Remove'
}

//Add City
export interface AddCity {
    type: CitiesTypes.ADD
    payload: City
}

//Remove City
export interface RemoveCity {
    type: CitiesTypes.REMOVE
    payload: number
}

export type CitiesActions = AddCity | RemoveCity
