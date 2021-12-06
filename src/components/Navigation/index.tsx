import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import {Header} from "../Header";

import {Weather} from "../../pages/Weather";
import {Home} from "../../pages/Home";
import {WeatherChart} from "../../pages/WeatherCharts";

export const Navigation = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/weather" element={<Weather/>}/>
                <Route path="/" element={<Home/>}/>
                <Route key='city-weather' path='/weather/:id' element={<WeatherChart/>}/>
            </Routes>
        </Router>
    );
};