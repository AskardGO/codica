import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import {Header} from "../Header";

import {Weather} from "../../Pages/Weather";
import {Home} from "../../Pages/Home";

export const Navigation = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/weather" element={<Weather/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
};