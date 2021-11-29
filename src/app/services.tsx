import axios from "axios";

const API_URL = 'api.openweathermap.org/data/2.5/weather?'
const API_ID = '894e0aa598fc703bfa849633f0a0ebe2'

const getWeatherByCityName = (name: string) => {
    return axios(`api.openweathermap.org/data/2.5/weather?q${name}&appid=${API_ID}`)
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log("err", err)
        })
}