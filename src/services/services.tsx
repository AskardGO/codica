import axios from "axios";

const API_URL = "https://samples.openweathermap.org/data/2.5/forecast"
const API_ID = '44c6869e5d3deb1e79c7d3ac8944e2ef'

export const getCities = (partOfName: string) => {
    return axios.get(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${partOfName}&hateoasMode=false&limit=10&offset=0&sort=-population`)
        .then((data) => [data.data.data, null])
        .catch((err) => [null, err])
}

export const getWeatherByCityName = (name: string, tag: string) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name},${tag}&appid=${API_ID}`)
        .then((data) => [data.data, null])
        .catch((err) => [null, err])
}