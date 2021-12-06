export type Coords = {
    lon: number
    lat: number
}

export type HourlyWeatherType = {
    clouds: number
    dew_point: number
    dt: number
    feels_like: number
    humidity: number
    pop: number
    pressure: number
    temp: number
    uvi: number
    visibility: number
    weather: any[]
    wind_deg: number
    wind_gust: number
    wind_speed: number
    rain?: {
        '1h':number
    }
}