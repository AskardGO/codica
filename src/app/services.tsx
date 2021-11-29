import axios from "axios";

const API_URL = "https://samples.openweathermap.org/data/2.5/forecast"
const API_ID = '44c6869e5d3deb1e79c7d3ac8944e2ef'

export const getCities = (partOfName: string) => {
    return axios.get(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${partOfName}&hateoasMode=false&limit=10&offset=0&sort=-population`)
        .then((data) => [data.data.data, null])
        .catch((err) => [null, err])
}

export const getWeatherByCityName = (city: string, country: string) => {
    console.log('log', city)
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_ID}`)
        .then((data) => {
            console.log("data", data)
        })
        .catch((err) => {
            console.log("err", err)
        })
}